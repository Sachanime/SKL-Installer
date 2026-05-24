const path = require('path')
const { createFolder, curl } = require('../Functions')

const installLocation = path.join('C:', 'Program Files', 'SKL', 'Registry-Reparator')

async function installRegistryReparator() {

    process.stdout.write('\x1B[2J\x1B[3J\x1B[H')
    console.log("Starting Auto-Winget installation...")
    console.log("Creating directories...")

    try {
        await createFolder(installLocation)
    }

    catch(err) {
        console.error("Folder creation failed")
        throw(err)
    }

    console.log("Downloading files...")

    try {
        await curl('https://raw.githubusercontent.com/Sachanime/Registry-Reparator/main/Registry_Reparator.exe', path.join(installLocation, 'Registry_Reparator.exe'))
        await curl('https://userdiag.com/download', path.join(installLocation, 'UserDiag.exe'))
    }

    catch(err) {
        console.error("Files download failed")
        throw(err)
    }

    console.log("Finished")

}

module.exports = { installRegistryReparator }