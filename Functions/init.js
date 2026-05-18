const { displayBanner } = require('./displayBanner')
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function init() {

    displayBanner('BannerPrograms.txt')
    await sleep(1500)
    process.stdout.write('\x1B[2J\x1B[3J\x1B[H')
    displayBanner('BannerInstaller.txt')

}

module.exports = { init }