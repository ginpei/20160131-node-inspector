// http://uupaa.hatenablog.com/entry/2013/10/21/092523
//
// Run:
//
// ```
// $ ./node_modules/.bin/node-inspector --port 8008
// $ node --debug main.js
// ```
//
// Access:
//
// - http://127.0.0.1:8008/?ws=127.0.0.1:8008&port=5858 (Chrome; Open first)
// - http://127.0.0.1:3000/version (Any Browsers; After above one)
//

var http = require('http');

http.createServer( function(req, res) {
	console.log('Log at the server');
	debugger;
	var token = req.url.replace(/^\/|\/$/g, "").split("/");

	if (token[0] === "api") {
		var method = token[1];
		switch (method) {
			case "version":
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.end('version 0.0\n');
				break;
			default:
				res.writeHead(500, {'Content-Type': 'text/plain'});
				res.end('ERROR\n');
				break;
		}
	} else {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n');
	}
}).listen(3000);

console.log('Server is running.');
