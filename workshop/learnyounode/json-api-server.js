//console.log(process.argv);

var port = process.argv[2];

var http = require('http');
var url = require('url');

// "/api/parsetime?iso=2013-08-10T12:10:15.474Z"
// "/api/unixtime"

function parsetime(datetime) {
    return {
        hour: datetime.getHours(),
        minute: datetime.getMinutes(),
        second: datetime.getSeconds()
    }
}

function unixtime(datetime) {
    return { unixtime : datetime.getTime() }
}

var server = http.createServer(function (req, res) {
    //console.log(req.url);
    // parse url & query string, 'true' : parse query string also
    var parsedUrl = url.parse(req.url, true);
    var datetime = new Date(parsedUrl.query.iso);
    
    var result;
    
    if(/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(datetime);
    } else if(/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(datetime);
    }
    
    if(result) {
        res.writeHead(200, {'Content-Type':'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
    
});

server.listen(Number(port));