const { exec } = require('child_process')
const util = require('util')

const execPromise = util.promisify(exec)

async function curl(url, path) {

    const command = `curl -f -L "${url}" -o "${path}"`

    try {
        const { stderr } = await execPromise(command)
        console.log(stderr || "File downloaded")
    }

    catch(error) {
        console.error("Execution error :\n", error.message)
        throw(error)
    }

}

module.exports = { curl }