const path = require('path');

module.exports = {
    entry: {app: './app.js'},
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    }
}


