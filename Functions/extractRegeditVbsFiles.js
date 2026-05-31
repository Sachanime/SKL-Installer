const regeditRaw = require('regedit')
const path = require('path')
const { extractFiles } = require('./extractFiles')

async function extractRegeditVbsFiles() {

    const vbsTargetDir = path.join(process.env.TEMP, 'skl', 'vbs')
    const vbsSource = path.resolve(__dirname, '..', 'node_modules', 'regedit', 'vbs' )
    const vbsFiles = ['ArchitectureAgnosticRegistry.vbs', 'ArchitectureSpecificRegistry.vbs', 'JsonSafeTest.wsf', 'regCreateKey.wsf', 'regDeleteKey.wsf', 'regDeleteValue.wsf', 'regList.wsf', 'regListStream.wsf', 'regPutValue.wsf', 'regUtil.vbs', 'util.vbs', 'wsRegReadList.wsf', 'wsRegReadListStream.wsf']
    
    try {
        await extractFiles(vbsSource, vbsTargetDir, vbsFiles)
        regeditRaw.setExternalVBSLocation(vbsTargetDir)
    }

    catch(err) {
        console.error('Extraction failed')
        throw(err)
    }

}

module.exports = { extractRegeditVbsFiles }