
var url=require("url");
var path=url.parse(req.url).pathname;

var http = require("http");
var server = http.createServer(function(req, res) {

res.writeHead(200, {'Content-type': 'text/plain' });


	res.write("this is Anil Buddy");
	res.end("lets connect with Html);
	
	});
server.listen(8000);