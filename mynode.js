
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});


  res.end('Hello World!');
	res.end('Hi This Is ANil');
}).listen(8000);

