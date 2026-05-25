async function pause() {

    console.log("\nPress any key to exit...")
    
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true)
    }

    process.stdin.resume()

    return new Promise(resolve => {

        process.stdin.once('data', () => {

            if (process.stdin.isTTY) {
                process.stdin.setRawMode(false)
            }

            process.stdin.pause()
            resolve()

        })

    })

}

module.exports = { pause }