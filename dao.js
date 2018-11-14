var objoracle = require('oracledb');

cns= {
	user: "PEREJILA",
	password: "PEREJILA01",
	connectString: "99.90.28.31/AGSTEST"
};

function error(err,rs,cn){
	if (err) {
		console.log(err.message);
		rs.contentType('application/json').status(500);
		rs.send(err.message);
		if (cn!=null) close(cn);
		return -1;
	}
	else
		 return 0;
}

function open(sql,binds,dm1,rs){
	objoracle.getConnection(cns,function(err,cn){
		if (error(err,rs,null)==-1) return;
		cn.execute(sql,binds,{autoCommit: dm1},function(err,result){
		if (error(err,rs,cn)==-1) return;
		rs.contentType('application/json').status(200);
		if (dm1)
		rs.send(JSON.stringify(result.rowsAffected));
		else{
			console.log(result.metaData);
			rs.send(JSON.stringify(result.rows));
		}
		close(cn);
	});
 })
}

function close(cn) {
	cn.release(
		function(err) {
			if  (err) { console.error(err.message); }
		}
	);
}
	
exports.open = open;
exports.close = close;