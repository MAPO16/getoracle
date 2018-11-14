var express = require("express");
var app = express ();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var dao = require("./dao");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
router.post('/empleados', function(request, response) {
	
		//sql = "INSERT INTO (id_empleado,nombre) VALUES ('34',Miguel) ";
		sql="INSERT INTO PEREJILA.MYTAB (ID, DATA) VALUES (:idperejila, :dataperejila)";
		var idperejila = parseInt (request.query.idperejila);
		var dataperejila = parseInt (request.query.dataperejila);
        var dataperejila =request.query.dataperejila;
        var idperejila =request.query.idperejila;

		console.log(dataperejila);
		console.log(idperejila);
		dao.open(sql,[idperejila,dataperejila],false,response);
		
	
	response.end;
});

app.use(router);

app.listen(3001, function() {
	console.log("servidor web - http://localhost:3001");
});
