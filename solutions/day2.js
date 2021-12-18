#!/usr/bin/env node
const n = require("./readInputAsLinesForDay.js")('2');

for(h=d=0,i=-1;++i<n.length;v=+n[i].split` `[1],k=='f'?h+=v:d+=k=='u'?-v:v)k=n[i][0],console.log(h*d)