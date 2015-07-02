//console.log(process.argv);

var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (req, res) {
    // Request handling logic ...
    res.writeHead(200, { 'content-type': 'text/plain' }); 
    var fileReadStream = fs.createReadStream(file);
    
    fileReadStream.on('open', function() {
        fileReadStream.pipe(res);
    });
    
    fileReadStream.on('error', function(err) {
        res.end(err);
    });
});

server.listen(Number(port));    