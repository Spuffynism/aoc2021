const fs = require('fs');

module.exports = (day) => fs.readFileSync(`../inputs/${day}/input.txt`, 'utf8').split('\n');
