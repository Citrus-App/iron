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
            let jsCode = 'import React from \'react\'\n'

            components.forEach((component) => {
                const { name: componentName, svg, figmaExport } = component

                const options = {
                    pageName,
                    componentName,
                    ...figmaExport,
                }

                const variableName = getVariableName(options)
                let variableValue

                if (/^[\d]+/.test(variableName)) {
                    throw new Error(`"${componentName.trim()}" thrown an error: component names cannot start with a number.`)
                }

                switch (true) {
                    case useBase64:
                        variableValue = Buffer.from(svg).toString('base64')
                        break
                    case useDataUrl:
                        variableValue = svgToMiniDataURI(svg)
                        break
                    default:
                        variableValue = svg
                        break
                }

                if (jsCode.includes(`export const ${variableName} =`)) {
                    throw new Error(`Component "${componentName}" has an error: two components cannot have a same name.`)
                }

                jsCode += `export const ${variableName} = (${variableValue})\n`
            })

            const filePath = path.resolve(output, `${pageName}.tsx`)

            fs.mkdirSync(path.dirname(filePath), { recursive: true })
            fs.writeFileSync(filePath, jsCode)
        })
    }
}