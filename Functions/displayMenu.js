const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require('node:process')

async function displayMenu() {

    const rl = readline.createInterface({ input, output })
    let menu = true

    while(menu) {

        console.log("\nMAIN MENU")
        console.log("Select the program you want to install")
        console.log("\n1) Auto-Winget")
        console.log("2) Registry-Reparator")
        console.log("3) EXIT")

        const choice = await rl.question("\nYour choice (1-3) : ")

        switch(choice) {

            case '1':
                return(1)

            case '2':
                return(2)

            case '3':
                return(3)

            default:
                console.log("Invalid choice, please retry")

        }

    }

    rl.close()

}

module.exports = { displayMenu }