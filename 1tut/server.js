const os=require('os')
const path=require('path')
const math=require("./math")
const {subtract} =require('./math')

// console.log(os.type())

// console.log(os.version())

// console.log(os.homedir())

// console.log(__dirname)

// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

console.log(math.add(10,5));
console.log(math.subtract(10,5));

console.log(math.multiply(10,5));
console.log(math.divide(10,5));

console.log(subtract(19,8))

