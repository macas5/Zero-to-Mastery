const fs = require('fs');
const { log } = require('console');

fs.readFile('./hello.txt', (err, data) => {
    if(err){
        console.log('Error');
    } else {
        console.log('1', data.toString());
    }
})

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

//APPEND
// fs.appendFile('./hello.txt', ' This is nais!', err => {
//     if (err) {
//         console.log(err);
//     }
// });

//WRITE
// fs.writeFile('bye.txt', 'Laterz', err => {
//     if (err){
//         console.log(err);
//     }
// });

//DELETE
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err);
    }
});