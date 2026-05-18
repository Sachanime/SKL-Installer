const regedit = require('regedit').promisified

async function readRegistry(regPath, regValue) {

    try {

        const result = await regedit.list([regPath])
        const keyData = result[regPath]

        if(keyData && keyData.exists) {

            if(keyData.values[regValue]) {
                const value = keyData.values[regValue].value
                return(value)
            }

        }

        else {
            console.error("Error: Key not found")
            return
        }

    }

    catch (err) {
        console.error("Reading error : \n", err)
    }

}

module.exports = { readRegistry }