const { exec } = require('child_process')
const { readRegistry, createFolder, curl, importScheduledTask } = require('../Functions')

async function installAutoWinget() {

    process.stdout.write('\x1B[2J\x1B[3J\x1B[H')
    console.log("Startin Auto-Winget installation...")
    console.log("Checking your Windows version...")

    const requiredBuild = 26100
    const windowsBuild = await readRegistry('HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion', 'CurrentBuild')
    const buildNumber = parseInt(windowsBuild, 10)

    console.log("Your Windows version is 10.0." + buildNumber)

    if(buildNumber > requiredBuild) {
        console.log("Your system is ready")
    }

    else {
        console.error("Your system is not compatible")
        return
    }

    console.log("Activating sudo...")

    const command = 'sudo config --enable normal'

    exec(command, (error, stdout, stderr) => {

        if(error) {
            console.error('Execution error :\n', error.message)
            return
        }

        if(stderr) {
            console.error('System error :\n', stderr)
            return
        }

        console.log(stdout || 'Sudo activated')

    })

    console.log("Creating directories...")

    await createFolder('C:\\Program Files\\SKL\\Auto-Winget')

    console.log("Downloading files...")

    await curl("https://raw.githubusercontent.com/Sachanime/Auto-winget/main/Auto-Winget.ps1", "C:\\Program Files\\SKL\\Auto-Winget\\Auto-Winget.ps1")
    await curl("https://raw.githubusercontent.com/Sachanime/Auto-winget/main/Auto-Winget.xml", "C:\\Program Files\\SKL\\Auto-Winget\\Auto-winget.xml")

    console.log("Importing scheduled task...")

    await importScheduledTask("C:\\Program Files\\SKL\\Auto-Winget\\Auto-winget.xml", "Auto-Winget")

    console.log("Finished")

}

module.exports = { installAutoWinget }