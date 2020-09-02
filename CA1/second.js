const prompt = require('prompt-sync')()
const fs = require('fs')
let n = Math.abs(prompt('Enter Number: '))
let res = 0
sum(n)
function sum(x) {
    if (x > 0) {
        sum(x - 1)
        res = res + x;
    }
}
fs.access('result.txt', (err, data) => {
    if (err)
        console.log('No such file Exists.')
    else {
        fs.writeFile('result.txt', res, (err) => {
            if (err) console.log('err')
            else { console.log('Result '+res+' saved into Result.txt file successfully') }
        })
    }
})
