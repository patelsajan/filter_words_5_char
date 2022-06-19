const fs = require('fs');

const file = 'word_list.txt';
const target_file = 'words_5_chars.txt';

fs.access(file, fs.constants.F_OK, err => console.log(`${err? 'file doesn\'t exist' : 'file exists'}`));
fs.readFile(file, (err, data) => {
    let jsonData = JSON.parse(data.toString());
    let keys = Object.keys(jsonData);
    let words_5_chars = keys.filter(word=>word.length===5);
    console.log('word_5_chars', words_5_chars.length, words_5_chars);
    fs.writeFile(target_file, words_5_chars.toString(), err=>{console.log(`${err? 'file not written' : 'file written'}`)})
    console.log('test done');
})