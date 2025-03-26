import { createConnection } from "mysql";

let conexion = createConnection({
    host: "localhost",
    database: "act_aseg_2",
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
    let query1 = `INSERT INTO finiquito VALUES (${nombre},${apellido},${run},${especialidad},${correo},${sistema},${coti},${años},${sueldoBruto},${sueldoLiquido})`;
    
    console.log(query1);
    conexion.query(query1);
};

conexion.end();