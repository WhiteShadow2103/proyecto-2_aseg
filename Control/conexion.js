let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "",
    user: "root",
    password: ""
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Conexion OK")
    }
});

conexion.end();