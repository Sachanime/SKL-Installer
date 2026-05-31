const { program } = require('commander')
const { init, displayMenu, installAutoWinget } = require('./Modules')
const { pause } = require('./Functions')

program.version('1.0.0')
.option('--install-auto-winget', 'Installer Auto-Winget en mode silencieux')
.allowUnknownOption()

program.parse(process.argv)
const options = program.opts()

async function main() {

    await init()

    const choice = await displayMenu()

    if(choice == 1) {

        try { 
            await installAutoWinget()
            await pause()
            process.exit(0)
        }

        catch(err) {
            console.error("Auto-Winget installation failed")
            await pause()
            process.exit(1)
        }
            
    }

    if(choice == 3) {
        await pause()
        process.exit(0)
    }



}

async function silentInstallAutoWinget() {

    try {
        await init()
        await installAutoWinget()
        console.log("Installation successfull")
        process.exit(0)
    }

    catch(err) {
        console.error("Installation failed")
        await pause()
        process.exit(1)
    }

}

if(options.installAutoWinget) {
    silentInstallAutoWinget()
}


else {
    main()
}