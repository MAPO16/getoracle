var express = require("express");
var app = express ();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var dao = require("./dao");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
router.get('/empleados', function(request, response) {
	
		sql = "SELECT * FROM SAT_AGS_CAYAS_MV WHERE EMPLID=:EMPLEADO";
		var EMPLEADO = parseInt (request.query.EMPLEADO);
		dao.open(sql,[EMPLEADO],false,response);
		
	
	response.end;
});

app.use(router);

app.listen(3000, function() {
	console.log("servidor web - http://localhost:3000");
});
