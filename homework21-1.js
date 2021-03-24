
const http = require('http');

http.createServer(function (req, res) {
	
	if(req.url=="/sunny"){
	console.log("yes");
}else{
	console.log("no");
}

 
}).listen(8080);
