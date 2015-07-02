//console.log(process.argv);

var http = require('http');
var bl = require('bl');


var count = 0;
var results = [];

function queryData(url, index) {
    http.get(url, function(response) {
        response.pipe(bl(function(err, data) {
            if(err) {
                return console.error(err);
            }
            count++;
            //console.log(count);            
            //results.push(data.toString());
            results[index] = data.toString();
            
            if(count == 3) {
                printResults();
            }
            
        }));
    });
}

function printResults() {
    for(var i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

function queryServers() {
    for(var i = 0; i < 3; i++) {
        var url = process.argv[i+2];
        queryData(url, i);
        //console.log(url);
    }
}

queryServers();
//printResults();
