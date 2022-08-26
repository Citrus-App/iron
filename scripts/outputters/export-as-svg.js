const { camelCase } = require('@figma-export/utils')
const fs = require('fs')
const path = require('path')

const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = ({
    output,
    getVariableName = (options) => camelCase(options.componentName.trim()),
    useBase64 = false,
    useDataUrl = false,
}) => {
    return async (pages)=> {
        pages.forEach(({ name: pageName, components }) => {
            let indexFile = 'import React from \'react\'\n'

            components.forEach((component) => {
                const { name: componentName, svg, figmaExport } = component

                const options = {
                    pageName,
                    componentName,
                    ...figmaExport,
                }

                const variableName = getVariableName(options)

                if (/^[\d]+/.test(variableName)) {
                    throw new Error(`"${componentName.trim()}" thrown an error: component names cannot start with a number.`)
                }

                if (indexFile.includes(`export const ${variableName} =`)) {
                    throw new Error(`Component "${componentName}" has an error: two components cannot have a same name.`)
                }

                indexFile += `export const ${variableName} = (${svg})\n`
            })

            const filePath = path.resolve(output, `${pageName}.tsx`)

            fs.mkdirSync(path.dirname(filePath), { recursive: true })
            fs.writeFileSync(filePath, indexFile)
        })
    }
}