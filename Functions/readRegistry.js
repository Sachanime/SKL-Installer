const regedit = require('regedit').promisified
const path = require('path')
const { extractFiles } = require('./extractFiles')

async function readRegistry(regPath, regValue) {

    const isPkg = typeof process.pkg !== 'undefined'
    const targetVbsDir = path.join(process.env.TEMP, skl, vbs)

    if(isPkg) {

        try {
            extractFiles()
        }

    }

    try {

        const result = await regedit.list([regPath])
        const keyData = result[regPath]

        if(keyData && keyData.exists) {

            if(keyData.values[regValue]) {
                const value = keyData.values[regValue].value
                return(value)
            }

        }

        else {
            throw(new Error("Registry key not found"))
        }

    }

    catch (err) {
        console.error("Reading error : \n", err)
        throw(err)
    }

}

module.exports = { readRegistry }