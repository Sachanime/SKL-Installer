const { init, displayMenu, installAutoWinget } = require('./Modules')
const { pause } = require('./Functions')

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


main ()