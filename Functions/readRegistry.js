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
            throw(new Error("Registry key not found"))
        }

    }

    catch (err) {
        console.error("Reading error : \n", err)
        throw(err)
    }

}

module.exports = { readRegistry }