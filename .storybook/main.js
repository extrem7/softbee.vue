// eslint-disable-next-line import/no-extraneous-dependencies
const { register } = require('esbuild-register/dist/node')

register({ target: 'node15' })

// eslint-disable-next-line import/extensions
module.exports = require('./main.ts')
