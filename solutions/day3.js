#!/usr/bin/env node
const n = require("./readInputAsLinesForDay.js")('3');

a=[]
for (i = 0; i < n.length; i++) {
    if (i===0) {
        a=Array(n[i].length).fill(0)
    }

    for (s=n[i],j=0;j<s.length;j++){
        a[j]+=!+s[j]?-1:1
    }
}

console.log(+`0b${a.map(v=>v>=0?1:0).join('')}`*+`0b${a.map(v=>v>=0?0:1).join('')}`)