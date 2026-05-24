const fs = require('fs')
const path = require('path')
const { createFolder } = require('./createFolder')

async function extractFiles(source, dest, files) {

    try {
        
        createFolder(dest)
        
        files.forEach(file => {

            const sourcePath = path.join(source, file)
            const destPatrh = path.join(dest, file)
            const fileData = fs.readFile(sourcePath)

            fs.writeFile(destPatrh, fileData)

        })

    }

    catch(err) {
        console.error("Extraction error :\n", err)
        throw(err)
    }

}

module.exports = { extractFiles }