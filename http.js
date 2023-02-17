let http = require('http');

let server = http.createServer(function(req, res){
    res.write('<h1>Hi from NodeJs Server Code</h1>')
    res.end();

})


server.listen(1234);