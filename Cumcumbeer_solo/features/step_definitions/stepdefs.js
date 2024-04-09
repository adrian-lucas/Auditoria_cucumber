const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
   if (today === "viernes") {
      return "TGIF";
   } else {
      return "Nope";
   }
}

Given('que hoy es {string}', function (diaDado) {
   this.today = diaDado;
});
When('pregunto si ya es viernes', function () {
   this.actualAnswer = isItFriday(this.today);
});
Then('deberian decirme {string}', function (expectedAnswer) {
   assert.strictEqual(this.actualAnswer, expectedAnswer);
});

