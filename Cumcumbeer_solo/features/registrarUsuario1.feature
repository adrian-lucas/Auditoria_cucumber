# language: es
Requisito: Registro de usuario 
   Yo como usuario general
   Quiero crear una cuenta en el sistema
   Para tener acceso al mismo

Esquema del escenario: Registro exitoso
   Dado Que se abra la pagina de Registro
   Cuando Ingrese el Nombre Completo "<nombre>" 
   Y Ingrese el Correo Electronico "<email>"
   Y Ingrese el Carnet de Identidad "<ci>"
   Y Ingrese la Contraseña "<contrasenia>"
   Y Pulsamos el boton Resgistrar
   Entonces  Recibimos mensaje de "<msj respuesta>"
   
Ejemplos:
|nombre           |email            |ci         |contrasenia          | msj respuesta           |
|Adrian Mamani    |adrian@gmail.com  |123458778  |Contrasen14Fuerte-  |Registro exitoso|
|Ad               |ricardo@gmail.com |123458778  |Contrasen14Fuerte-  |Nombre invalido|
|Adrian Mamani    |adriangmail.com   |123458778  |Contrasen14Fuerte-  |Email invalido|
|Adrian Mamani    |adrian@gmail.com  |12         |Contrasen14Fuerte-  |CI invalido|
|Adrian Mamani    |adrian@gmail.com  |123458778  |Cont                |Contrasenia invalida|
