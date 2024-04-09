
const { Given, When, Then } = require("@cucumber/cucumber");
const paginaEjemplo = require("../support/example_pageObjects.js");
const usuario = {
   nombre: '',
   email: '',
   ci: '',
   contrasenia: '',
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

Given("Que se abra la pagina de Registro", async function(){
   await testController.navigateTo('file:///C:/Users/donpl/OneDrive/Escritorio/AuditoriaProyecto/Cucumber_TestCaffe/src/index.html');
});
When("Ingrese el Nombre Completo {string}",async function( nombreCompleto){
    usuario.nombre = nombreCompleto;
  const nameField = paginaEjemplo.elements.nameTxtBox();
  await testController.typeText(nameField,nombreCompleto);
});
When("Ingrese el Correo Electronico {string}", async function (email) {
   usuario.email = email;
   const nameField = paginaEjemplo.elements.emailTxtBox();
   await testController.typeText(nameField, email);
});
When("Ingrese el Carnet de Identidad {string}", async function (ci) {
   usuario.ci = ci;
   const nameField = paginaEjemplo.elements.ciTxtBox();
   await testController.typeText(nameField, ci);
});
When("Ingrese la Contraseña {string}",async function (contraseña) {
   usuario.contrasenia = contraseña;
   const nameField = paginaEjemplo.elements.passwordTxtBox();
   await testController.typeText(nameField, contraseña);
});
When("Pulsamos el boton Resgistrar",async function () {
   validarDatos();
   const submitBtn = paginaEjemplo.elements.submitBtn();
   await testController.click(submitBtn);
});
Then("Recibimos mensaje de {string}",async function(mensaje){
   // const msgBox = paginaEjemplo.elements.msgBox();
   await testController.expect(mensaje).eql(mensajeRespuesta);
})