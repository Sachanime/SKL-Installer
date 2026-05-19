const { init, displayMenu, installAutoWinget } = require('./Functions/index')

async function main() {

    await init()
    const choice = await displayMenu()

    if(choice == 1) {
        await installAutoWinget()
    }

}

main()