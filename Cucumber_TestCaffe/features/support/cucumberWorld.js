
// World is an isolated context for each cucumber scenario, exposed to the hooks and steps.
// Import setWorldConstructor from cucumber-js.
const { setWorldConstructor } = require('@cucumber/cucumber');
const testControllerHolder = require('./testControllerHolder.js');
function CustomWorld() {
 
   /*
9
   1. The waitForTestController promise object waits for TestCafe to finish setting up the controller asynchronously, 
10
   then adds it to Cucumber’s world scope as testController.
11
   2. It calls the testControllerHolder.get function to trigger the promise to return the testController.
12
   */
   
   this.waitForTestController = testControllerHolder.get()
   
      .then(function (tc) {
         
         return testController = tc;
         
      });
   17
}

setWorldConstructor(CustomWorld);