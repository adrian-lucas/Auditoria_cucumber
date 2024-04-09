const validarDatos = ()=>{
   const usuario = {
      nombre: document.getElementById("nombreInput"),
      email: document.getElementById("emailInput"),
      ci: document.getElementById("ciInput"),
      contrasenia: document.getElementById("passwordInput"),
   }
   // Variable para almacenar mensajes de respuesta
   let mensaje = "Registro exitoso";

   // Validación del nombre
   if (usuario.nombre.length < 3 || usuario.nombre.length > 30) {
      mensaje = "El nombre debe tener entre 3 y 30 caracteres.";
   }

   // Validación del email
   const emailExpresion = /\S+@\S+\.\S+/;
   if (!emailExpresion.test(usuario.email)) {
      mensaje = "El email no es válido.";
   }

   // Validación del CI
   if (usuario.ci.length < 8 || usuario.ci.length > 10) {
      mensaje = "El CI debe tener entre 8 y 10 caracteres.";
   }

   // Validación de la contraseña
   if (usuario.contrasenia.length < 8 || usuario.contrasenia.length > 20) {
      mensaje = "La contraseña debe tener entre 8 y 20 caracteres.";
   }

   // Mostrar mensaje de respuesta
   document.getElementById("mensajeRespuesta").textContent = mensaje;
   

}
