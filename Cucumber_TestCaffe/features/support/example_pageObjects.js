const { Selector } = require('testcafe');

/*
4
Create and export a module with name "elements". This module contains functions.
5
Each function is returning a Selector for a particular web element and bind to testController.
6
This module can be imported and called from Step Definitions to access the web elements.
7
*/

exports.elements = {
  
   nameTxtBox: function() {
      return Selector('#nombreInput').with({ boundTestRun: testController });
   },
   emailTxtBox: function() {
      return Selector('#emailInput').with({ boundTestRun: testController }); 
   },
    ciTxtBox: function() {
      return Selector('#ciInput').with({ boundTestRun: testController });
   },
    passwordTxtBox: function() {
      return Selector('#passwordInput').with({ boundTestRun: testController });
   },
    submitBtn: function() {
      return Selector('#submitBoton').with({ boundTestRun: testController });
   },
   msgBox:function(){
      return Selector('#mensajeRespuesta').with({ boundTestRun: testController }); 
   }

}