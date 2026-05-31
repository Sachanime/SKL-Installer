const regeditRaw = require('regedit')
const regedit = regeditRaw.promisified
const { extractRegeditVbsFiles } = require('./extractRegeditVbsFiles')

async function readRegistry(regPath, regValue) {

    const isPkg = typeof process.pkg !== 'undefined'

    if(isPkg) {

        try {
            await extractRegeditVbsFiles()
        }

        catch(err) {
            console.error('VBS extraction failed')
            throw(err)
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
        console.error("Execution error : \n", err)
        throw(err)
    }

}

module.exports = { readRegistry }