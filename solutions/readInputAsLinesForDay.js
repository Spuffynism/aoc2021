const fs = require('fs');

module.exports = (day) => fs.readFileSync(`../inputs/${day}.txt`, 'utf8').split('\n');
