//console.log(process.argv);

var url = process.argv[2];

var http = require('http');
var bl = require('bl');

http.get(url, function(res) {
    res.pipe(bl(function (err, data) {
        if(err) {
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});

