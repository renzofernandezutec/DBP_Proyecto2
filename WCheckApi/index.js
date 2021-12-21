const { response } = require('express');
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

var cors = require('cors');
app.use(cors());

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'WCheckDB'
  });

  //Apis
  app.use(express.json());
  
  app.get('/ClientesMast',getClientes);
  app.get('/TL_Citas',getCitas);
  app.get('/TL_Cita',getCita);
  app.get('/TL_VehiculosMast',getVehiculos);

  app.post('/TL_VehiculosMast', postVehiculos);
  app.post('/TL_Citas', postCitas);
  app.post('/TL_CitasEstado',putCitasEstado);
  app.post('/TL_Login', loginUsuario);
  app.post('/ClientesMast', postNewCliente);
  app.post('/CambiarClave', postCambiarClave);


  // app.post('/TL', postLogin);

  app.put('/TL_Citas',putCitas);
  app.put('/TL_VehiculosMast',putVehiculos);
  
  app.delete('/TL_Citas',deleteClientes);


function getClientes(req, res) {
    const myQuery = " SELECT * FROM ClientesMast where Estado = 'A'; ";
    connection.query(myQuery, function (error, results, fields) {
    if(error) res.send(error);
    res.send(results);
  });}

function getCitas(req, res) {
    const myQuery = " SELECT * FROM TL_Citas where Estado = 'A' and IdVehiculo = ?; ";
    connection.query(myQuery, [req.query.IdVehiculo],function (error, results, fields) {
    if(error) res.send(error);
    res.send(results);
  });}
  
  function getCita(req, res) {
    const myQuery = " SELECT * FROM TL_Citas where IdCita = ?; ";
    connection.query(myQuery, [req.query.IdCita],function (error, results, fields) {
    if(error) res.send(error);
    res.send(results[0]);
  });}

function getVehiculos(req, res) {
    const myQuery = " SELECT * FROM TL_VehiculosMast where Estado = 'A' and IdCliente = ?; ";
    connection.query(myQuery,[req.query.IdCliente], function (error, results, fields) {
    if(error) res.send(error);
    res.send(results);
  });}

  function postNewCliente(req, res) {
    console.log("Nueva Cuenta");
    var myQuery =   "INSERT INTO ClientesMast (TipoDocumento,NumeroDocumento,Nombre,Telefono,Estado,Usuario,Clave) ";
    myQuery += " VALUES (?, ?, ?, ?,'A',?,?); ";
    var myValues = [req.body.TipoDocumento, req.body.NumeroDocumento, req.body.Nombre, req.body.Telefono, 
    req.body.Usuario,req.body.Clave];
    console.log(myQuery);
    connection.query(myQuery, myValues, function(error, results,fields){
        if (error) throw error;
    res.send(results);
    });
  }
  function postCambiarClave(req, res) {
    var myQuery =   "UPDATE ClientesMast set Clave = '" + req.body.Clave;
    myQuery += "' WHERE Usuario = '" + req.body.Usuario + "'; ";
    // var myValues = [req.body.Usuario, req.body.Clave];
    connection.query(myQuery, function(error, results,fields){
        if (error) throw error;
    res.send(results);
    });
  }

  function postVehiculos(req, res) {
    var myQuery =   "INSERT INTO TL_VehiculosMast(IdCliente,Marca,Modelo,Year,Estado) VALUES (?, ?, ?, ?,'A'); ";

    var myValues = [req.body.IdCliente, req.body.Marca, req.body.Modelo, req.body.Year];
    connection.query(myQuery, myValues, function(error, results,fields){
        if (error) throw error;
    res.send(results);
    });
  }

  function postCitas(req, res) {
    var myQuery =   "INSERT INTO TL_Citas (IdVehiculo,IdCliente,Fecha,Hora,Motivo,Sede,Estado) VALUES (?, ?, ?, ? , ? , ?,'A'); ";
    var myValues = [req.body.IdVehiculo, req.body.IdCliente, req.body.Fecha, req.body.Hora, req.body.Motivo, req.body.Sede];
    connection.query(myQuery, myValues, function(error, results,fields){
        if (error) throw error;
        res.send(results);
    });
  }


function putCitas(req, res) {
  var myQuery = "update TL_Citas set Estado = ?";
  var myValues = [req.body.Estado];

  if (req.body.Fecha){
    myQuery += " , Fecha = ? ";
    myValues.push(req.body.Fecha);
  }
  if (req.body.Hora){

    myQuery += " , Hora = ? ";
    myValues.push(req.body.Hora);
  }
  if (req.body.Motivo){

    myQuery += " , Motivo = ? ";
    myValues.push(req.body.Motivo);
  }
  if (req.body.Sede){

    myQuery += " , Sede  = ? ";
    myValues.push(req.body.Sede);
  }
  myQuery += " WHERE IdCita = ?;"
  myValues.push(req.params.IdCita);
  connection.query(myQuery, myValues, function(error, results,fields){
    if (error) throw error;
    res.send(results);
  });
}

function putCitasEstado(req, res) {
  var myQuery = "update TL_Citas set Estado = ?";
  var myValues = [req.body.Estado];
  myQuery += " WHERE IdCita = ?;"
  myValues.push(req.body.IdCita);
  connection.query(myQuery, myValues, function(error, results,fields){
    if (error) throw error;
    res.send(results);
  });
}

function putVehiculos(req, res) {
  var myQuery = "update TL_VehiculosMast set Estado = ?";
  var myValues = [req.body.Estado];

  if (req.body.Fecha){

    myQuery += " , Marca  = ? ";
    myValues.push(req.body.Marca);
  }
  if (req.body.Hora){

    myQuery += " , Modelo  = ? ";
    myValues.push(req.body.Modelo );
  }
  if (req.body.Año ){

    myQuery += " , Año  = ? ";
    myValues.push(req.body.Año);
  }
 
  myQuery += " WHERE IdVehiculo  = ?; "
  myValues.push(req.params.IdVehiculo);
  connection.query(myQuery, myValues, function(error, results,fields){
    if (error) throw error;
    res.send(results);
  });
}

  function deleteClientes(req, res)
  {
    var myQuery = "delete from TL_VehiculosMast Where IdVehiculo = ?;";
    var myValues = [req.body.Estado];
  
    var myValues = [ req.params.member_id ];

    connection.query(myQuery, myValues, function(error, results,fields){
      if (error) throw error;
      res.send(results);
    });
  }

  function loginUsuario(req,res)
  {
    var myQuery =  "Select IdCliente as Valid from ClientesMast where Estado = 'A' and Usuario = ? and Clave = ?; ";
    var myValues = [req.body.Usuario, req.body.Clave];
    connection.query(myQuery, myValues, function(error, results,fields){
        if (error) throw error;
    res.send(results[0]);
    });
  }


  app.listen(port, function(){
      console.log("Api Started!");
  })


