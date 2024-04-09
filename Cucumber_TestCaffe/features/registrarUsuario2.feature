# language: es
Requisito: Registro de usuario 

Escenario: Registro exitoso
   Dado Que se abra la pagina de Registro
   Cuando Ingrese el Nombre Completo "Adrian Mamani Mamani" 
   Y Ingrese el Correo Electronico "adrian@gmail.com"
   Y Ingrese el Carnet de Identidad "12345678"
   Y Ingrese la Contraseña "Contrasen14Fuerte-"
   Y Pulsamos el boton Resgistrar
   Entonces  Recibimos mensaje de "Registro exitoso"
   
   