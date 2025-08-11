//CRUD

const fs = require('fs')

console.log("Start")
// ReadFile
let data = fs.readFileSync('f1.txt')
console.log("This is file 1 ka data -> " + data);


fs.readFile('f2.txt', function (err, data) { // this callback is called error first callback
    if(err){
        console.log("error:",err);
    }
    console.log("this is file 2 data "+ data)
})