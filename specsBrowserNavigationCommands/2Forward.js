describe('Browser Navigation', () => {
  it('Exampe of forward method', () => {
     browser.get('https://material.angularjs.org')
     .then(()=>(browser.get('https://www.protractortest.org/#/faq')))
     .then(()=>(browser.sleep(5000)))
     .then(()=>(browser.navigate().back()))
     .then(()=>(browser.navigate().forward())) //Forward method used here
     .then(()=>(browser.sleep(5000)));
  });
});


/*  Note: This command works only if the User is navigated back from the previous screen and the browser navigation button is enabled.
    Protractor browser navigation commands - The "forward" method
          Purpose: The protractor command forward() is used to move forward in the browser history.

          Syntax: browser.navigate().forward(): promise.Promise<void>

          Returns: This command returns a promise that will be resolved when the navigation event has completed.

*/
