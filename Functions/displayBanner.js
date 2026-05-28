const fs = require('fs')
const path = require('path')

function displayBanner(filename) {

    try {
        const filePath = path.join(__dirname, "..", "ASCII Art", filename);
        const data = fs.readFileSync(filePath, 'utf-8')
        console.log(data)
    }

    catch(err) {
        console.error('Execution error :\n', err)
    }

}

module.exports = { displayBanner }