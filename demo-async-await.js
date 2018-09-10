const rm = require('rimraf')
const util = require('util')

const rmPromise = util.promisify(rm)

async function demo() {
    await rmPromise('./aaa')
    console.log('deleted')
}

demo()
