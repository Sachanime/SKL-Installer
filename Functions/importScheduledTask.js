const { exec } = require('child_process')
const util = require('util')

const execPromise = util.promisify(exec)

async function importScheduledTask(path, name) {

    const command = 'schtasks /Create /XML "' + path + '" /TN "' + name + '" /F'

    try {
        const { stdout } = await execPromise(command)
        console.log(stdout || "Scheduled task imported")
    }

    catch(error) {
        console.error("Execution error :\n", error.message)
        throw(error)
    }

}

module.exports = { importScheduledTask }
