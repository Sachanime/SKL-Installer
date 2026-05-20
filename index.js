const { init, displayMenu, installAutoWinget } = require('./Modules')

async function main() {

    await init()
    const choice = await displayMenu()

    if(choice == 1) {

        try { 
            await installAutoWinget() 
        }

        catch(err) {
            console.error("Auto-Winget installation failed")
        }

    }

}

main()