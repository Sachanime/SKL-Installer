const { displayBanner } = require('./displayBanner')
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function init() {

    displayBanner('BannerPrograms.txt')
    await sleep(1500)
    console.clear()
    displayBanner('BannerInstaller.txt')

}

module.exports = { init }