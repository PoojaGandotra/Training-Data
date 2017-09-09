/**

 * Created by BALASUBRAMANIAM on 11-03-2017.

 */

var express = require("express");

var app = express();

app.get("/", function(request, response) {

    response.send("API creation ....!");

});

-

app.get('/username/:user_name', function(request,response) {

    response.status(7700);

    response.set('Content-Type', 'text/html');

    response.end('<html><body>' +

        '<h1>Hello ' + request.params.user_name + '</h1>' +

        '</body></html>'

    );

});

app.set('port',7700);

app.listen(app.get('port'), function(){

    console.log('The server is running, ' +

        ' please open your browser at http://localhost:%s',

        app.get('port'));

});