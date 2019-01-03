 var http = require('http');
 var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url)
    if(req.url === '/login.html' || req.url == "/"){
    res.writeHead(200, {'Content-Type': "text/index.html"});
    fs.createReadStream(__dirname + '/login.html').pipe(res)
    
    } else if(req.url =='/index.html'){
        res.writeHead(200, {'Content-Type': "text/index.html"});
    fs.createReadStream(__dirname + '/index.html').pipe(res)
    }
    
    

    
    
    
});


server.listen(3000, '127.0.0.1');
console.log("hotel server know listening on port 3000 ");