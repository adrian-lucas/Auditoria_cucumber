const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert');
let usuario = {
}
let mensajeRespuesta = "Registro exitoso";
const validarDatos = () => {

   if (usuario.nombre.length < 3 || usuario.nombre.length > 30) {
      mensajeRespuesta = "Nombre invalido";
   }
   const emailExpresion = /\S+@\S+\.\S+/;
   if (!emailExpresion.test(usuario.email)) {
      mensajeRespuesta = "Email invalido";
   }
   if (usuario.ci.length < 8 || usuario.ci.length > 10) {
      mensajeRespuesta = "CI invalido";
   }
   if (usuario.contrasenia.length < 8 || usuario.contrasenia.length > 20) {
      mensajeRespuesta = "Contrasenia invalida";
   }
}

Given("Que se abra la pagina de Registro",  function () {
   usuario = {
      nombre: '',
      email: '',
      ci: '',
      contrasenia: '',
   }
});
When("Ingrese el Nombre Completo {string}",  function (nombreCompleto) {
   usuario.nombre = nombreCompleto;
});
When("Ingrese el Correo Electronico {string}",  function (email) {
   usuario.email = email;
});
When("Ingrese el Carnet de Identidad {string}",  function (ci) {
   usuario.ci = ci;
});
When("Ingrese la Contraseña {string}",  function (contraseña) {
   usuario.contrasenia = contraseña;
});
When("Pulsamos el boton Resgistrar",  function () {
   validarDatos();
});
Then("Recibimos mensaje de {string}",  function (mensaje) {
   assert.strictEqual(mensajeRespuesta,mensaje);
})