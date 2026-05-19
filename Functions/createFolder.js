const fs = require('fs').promises

async function createFolder(path) {

    try {
        await fs.mkdir(path, { recursive: true })
        console.log('Folder created')
    }

    catch (err) {

        if(err.code == 'EEXIST') {
            console.error('Folder alredy exist')
        }

        else {
            console.error("Error :\n", err)
        }

    }

}

module.exports = { createFolder }