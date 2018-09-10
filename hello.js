const rm = require('rimraf')

rm('./aaa', function () {
    console.log('deleted')
})
