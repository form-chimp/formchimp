const path = require('path')

module.exports = {
    entry: './src/index.js',

    output:{
        path: path.resolve(__dirname, 'lib'),
        filename:'build.js',
        library: {
            name: 'FormChimp',
            type: 'umd',
          }
    },
    mode : process.env.MODE
}