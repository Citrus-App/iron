/* eslint no-undef: 0 */  // add this so that `__dirname` won't err

import fs from "fs"
import { join } from "path"
import pkg from 'humps';
const { pascalize } = pkg;
import { auto } from "async"


const folders = [
  'areas',
  'atoms',
  'components'
]

function getTypePath(foldder) {
  return folders.filter((t) => {return t.indexOf(foldder) >= 0})[0]
}

function init() {
  const folder = getTypePath(process.argv[2])
  const name = pascalize(process.argv[3])

  if (!folder) {
    return console.error(`Please provide a type of ${folders.explode(',')}`)
  }
  if (!name) {
    return console.error("Please provide a component name.")
  }

  const componentPath = join(__dirname, "..", "src", folder, name)

  fs.stat(componentPath, maybeCreateComponent(folder, name))
}

init()

function maybeCreateComponent(type, name) {
  return function (err, stats) {
    if (err && err.errno === -2) {
      return createComponent(type, name, function (finalErr) {
        if (finalErr) return console.error(finalErr)

        console.log("All done!")
      })
    }

    if (stats.isDirectory()) {
      return console.warn(
        `Some rad human already made the ${name} component in the ${type}s directory.\n`
      )
    }
  }
}

function createComponent(type, name, callback) {
  const basePath = `src/${type}/${name}`
  const modulePath = join(basePath, `${name}.tsx`)
  const indexPath = join(basePath, `index.ts`)
  const stylesPath = join(basePath, `${name}.module.css`)

  auto(
    {
      base: createBase(basePath),
      module: createModule(modulePath, name, `src/${type}`),
      index: createIndex(indexPath, name, `src/${type}`),
      styles: createStyles(stylesPath),
    },
    callback
  )
}

function createBase(p) {
  return function (callback) {
    console.log(`Creating ${p}`)
    fs.mkdir(join(__dirname, "..", p), callback)
  }
}

function createModule(p, name, parent) {
  const tpl = `import React from 'react'
import styles from "./${name}.module.css";

type Props = {
  // props here
}

const ${name} = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am ${name}
    </div>
  )
};

export default ${name};
`

  return function (callback) {
    _writeFile(p, tpl, callback)
  }
}

function createIndex(p, name, parent) {
  const innerIndex = `export { default } from "./${name}";`
  const indexExport = `\nexport { default as ${name} } from "./${name}";`
  return function (callback) {
    fs.appendFile(join(parent, 'index.ts'), indexExport, function (err) {
      if (err) {
        // append failed
        console.error("could not write to index.ts")
      } else {
        // done
        _writeFile(p, innerIndex, callback)
      }
    })
  }
}

function createStyles(p) {
  const tpl = `
.root {
  position: relative;
}
`

  return function (callback) {
    _writeFile(p, tpl, callback)
  }
}


function _writeFile(p, tpl, callback) {
  console.log(`Creating ${p}`)
  fs.writeFile(join(__dirname, "..", p), tpl, callback)
}
