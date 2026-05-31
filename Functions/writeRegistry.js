const regeditRaw = require('regedit')
const regedit = regeditRaw.promisified
const { extractRegeditVbsFiles } = require('./extractRegeditVbsFiles')

async function writeRegistry(regPath, regKey, regType, regValue) {

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

        await regedit.createKey([regPath])

        if(regKey.length == regType.length && regKey.length == regValue.length) {

            const valuesToWrite = {}

            for(let i = 0; i < regKey.length; i++) {

                valuesToWrite[regKey[i]] = {
                    value: regValue[i],
                    type: regType[i]
                }
                
            }

            await regedit.putValue({
                [regPath]: valuesToWrite
            })

        }

    } catch(err) {
        console.error("Execution error :\n", err)
        throw(err)
    }

}

module.exports = { writeRegistry }