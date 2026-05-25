const regeditRaw = require('regedit')
const regedit = regeditRaw.promisified
const path = require('path')
const { extractFiles } = require('./extractFiles')

async function readRegistry(regPath, regValue) {

    const isPkg = typeof process.pkg !== 'undefined'
    const vbsTargetDir = path.join(process.env.TEMP, 'skl', 'vbs')
    const vbsSource = path.resolve(process.cwd(), 'node_modules', 'regedit', 'vbs' )
    const vbsFiles = ['ArchitectureAgnosticRegistry.vbs', 'ArchitectureSpecificRegistry.vbs', 'JsonSafeTest.wsf', 'regCreateKey.wsf', 'regDeleteKey.wsf', 'regDeleteValue.wsf', 'regList.wsf', 'regListStream.wsf', 'regPutValue.wsf', 'regUtil.vbs', 'util.vbs', 'wsRegReadList.wsf', 'wsRegReadListStream.wsf']

    if(isPkg) {

        try {
            await extractFiles(vbsSource, vbsTargetDir, vbsFiles)
            regeditRaw.setExternalVBSLocation(vbsTargetDir)
        }

        catch(err) {
            console.error('Extraction failed', err)
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