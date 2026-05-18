const { init, displayMenu } = require('./Functions/index')

async function main() {

    await init()
    const choice = await displayMenu()

}

main()