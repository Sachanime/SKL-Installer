const { exec } = require('child_process')
const util = require('util')
const { readRegistry, createFolder, curl, importScheduledTask } = require('../Functions')

const execPromise = util.promisify(exec)

async function installAutoWinget() {

    process.stdout.write('\x1B[2J\x1B[3J\x1B[H')
    console.log("Starting Auto-Winget installation...")
    console.log("Checking your Windows version...")

    const requiredBuild = 26100
    let windowsBuild
    let buildNumber

    try {
        windowsBuild = await readRegistry('HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion', 'CurrentBuild')
        buildNumber = parseInt(windowsBuild, 10)
        console.log("Your Windows version is 10.0." + buildNumber)
    }

    catch(err) {
        console.error("Registry read failed")
        throw(err)
    }

    if(buildNumber >= requiredBuild) {
        console.log("Your system is ready")
    }

    else {
        console.error("Your system is not compatible")
        throw(new Error("System not compatible"))
    }

    console.log("Activating sudo...")

    const command = 'sudo config --enable normal'

    try {
        const { stdout } = await execPromise(command)
        console.log(stdout || 'Sudo activated')
    }

    catch(error) {
        console.error("Execution error:\n", error.message)
        throw(error)
    }

    console.log("Creating directories...")

    try {
        await createFolder('C:\\Program Files\\SKL\\Auto-Winget')
    } 
    
    catch(err) {
        console.error("Folder creation failed, stopping installation.")
        throw(err)
    }

    console.log("Downloading files...")

    try {
        await curl("https://raw.githubusercontent.com/Sachanime/Auto-winget/main/Auto-Winget.ps1", "C:\\Program Files\\SKL\\Auto-Winget\\Auto-Winget.ps1")
        await curl("https://raw.githubusercontent.com/Sachanime/Auto-winget/main/Auto-Winget.xml", "C:\\Program Files\\SKL\\Auto-Winget\\Auto-winget.xml")
    }

    catch(err) {
        console.error("Files download failed")
        throw(err)
    }

    console.log("Importing scheduled task...")

    try {
        await importScheduledTask("C:\\Program Files\\SKL\\Auto-Winget\\Auto-winget.xml", "Auto-Winget")
    }

    catch(err) {
        console.error("Scheduled task import failed")
        throw(err)
    }

    console.log("Finished")

}

module.exports = { installAutoWinget }