const { readRegistry } = require('./readRegistry')

async function installAutoWinget() {

    process.stdout.write('\x1B[2J\x1B[3J\x1B[H')
    console.log("Startin Auto-Winget installation...")
    console.log("Checking your Windows version...")

    const windowsBuild = await readRegistry('HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion', 'CurrentBuild')

    console.log(windowsBuild)

}