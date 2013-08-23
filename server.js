var fs = require('fs');
var connect = require('connect');

connect()
	.use(connect.static(__dirname))
	.use(function (req, res, next) {
		console.log(req.url);
		fs.createReadStream('index.html').pipe(res);
	})
	.listen(8080);