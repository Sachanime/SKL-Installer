const { exec } = require('child_process')

async function importScheduledTask(path, name) {

    const command = 'schtasks /Create /XML ' + path + ' /TN ' + name + " /F"

    exec(command, (error, stdout, stderr) => {

        if(error) {
            console.error("Execution error :\n", error)
            return
        }

        if(stderr) {
            console.error("System error :\n", stderr)
        }

        console.log(stdout || "Scheduled task imported")

    })

}

module.exports = { importScheduledTask }
