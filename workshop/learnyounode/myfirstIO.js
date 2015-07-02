var fs = require('fs');

//console.log(process.argv);

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var strLines = str.split('\n');
//console.log(strLines);

console.log(strLines.length - 1);

//Solution:
// var countLines = buf.toString().split('\n').length - 1; 
//console.log(countLines);