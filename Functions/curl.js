const { exec } = require('child_process')

async function curl(url, path) {

    const command = 'curl -L -o ' + url  + ' ' + path

    exec(command, (error, stdout, stderr) => {

        if(error) {
            console.error("Execution error :\n", error)
            return
        }

        if(stderr) {
            console.error("System error :\n", stderr)
            return
        }

        console.log(stdout || "File downloaded")

    })

}

module.exports = { curl }