//console.log(process.argv);
var servPort = process.argv[2];

var net = require('net');

var server = net.createServer(function(socket) {
    // Socket handling logic
    socket.end(getCurrentTime() + '\n');
});

server.listen(servPort);

function getCurrentTime() {
    var strTime = '';
    
    var date = new Date();
    
    strTime = date.getFullYear() + '-' + prefixZero(date.getMonth()+1) + '-' + prefixZero(date.getDate()) + ' ' + prefixZero(date.getHours()) + ':' + prefixZero(date.getMinutes());
    
    return strTime;
}

function prefixZero(data) {
    return ((data < 10) ? '0' : '') + data;
}

