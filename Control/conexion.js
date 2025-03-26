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

function getall(nombre, apellido, run, especialidad, correo, sistema, coti, años, sueldoBruto, sueldoLiquido){
    const todo = [nombre, apellido, run, especialidad, correo, sistema, coti, años, sueldoBruto, sueldoLiquido];
    todo.forEach((todo, indice) => {
        console.log(`${indice + 1}: ${todo}`);
    })
};

conexion.end();