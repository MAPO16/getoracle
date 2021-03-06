var app = express ();
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var dao = require("./dao");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
router.get('/empleados', function(request, response) {
	
		sql = "SELECT * FROM SAT_AGS_CAYAS_MV WHERE EMPLID=:numempleado";
		var numempleado = parseInt (request.query.numempleado);
		dao.open(sql,[numempleado],false,response);
		
	
	response.end;
});

app.use(router);

app.listen(3000, function() {
	console.log("servidor web - http://localhost:3000");
});
