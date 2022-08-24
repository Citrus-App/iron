const fileId = 'fgODV4YBzhZc2ZxrFddbgY'
require('dotenv').config()

module.exports = {
  commands: [
    [
      'components',
      {
        fileId: fileId,
        onlyFromPages: ['Icons'],
        transformers: [
          require('@figma-export/transform-svg-with-svgo')({
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
              {
                name: 'removeDimensions',
                active: true,
              },
              {
                name: 'removeAttributesBySelector',
                params: {
                  selector: "[fill]",
                  attributes: ['fill', 'stroke'],
                },
              },
              {
                name: 'removeAttributesBySelector',
                params: {
                  selector: "[stroke]",
                  attributes: ['fill', 'stroke'],
                },
              },
            ],
          }),
        ],
        outputters: [
          require('@figma-export/output-components-as-es6')({
            output: './src/atoms/Icon/svgs',
          }),
        ],
      },
    ],
  ],
}