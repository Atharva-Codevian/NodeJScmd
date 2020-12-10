var http = require ('http');

//create server object
http.createServer(function(req,res){

    res.write('');                //write a response to the client
    res.end();



}).listen(8080);