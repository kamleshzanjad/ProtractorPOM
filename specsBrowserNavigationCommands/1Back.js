describe('Browser Navigation', () => {
  it('Exampe of back method', () => {
     browser.get('https://material.angularjs.org')
     .then(()=>(browser.get('https://www.protractortest.org/#/faq')))
     .then(()=>(browser.sleep(5000)))
     .then(()=>(browser.navigate().back())) //Back method used here
     .then(()=>(browser.sleep(10000)));
  });
});

/*
  Protractor Browser Navigation Commands
  Navigation methods help to browse different pages. 
  With the help of the browser navigation method, one can simulate the user's browser navigation behavior using a protractor. 
  
  The browser.navigate() has 4 methods, all the methods belong to class Navigation.
      The "back" method in Protractor
      The "forward" method in Protractor
      The "refresh" method in Protractor
      The "to" method in Protractor

  Protractor browser navigation commands - The "back" method
      Purpose: The protractor command back() is used to move backward in the browser history.
      Syntax: browser.navigate().back(): promise.Promise<void>
      Returns: This command returns a promise that will be resolved when the navigation event has completed.    

      Note: This command works only if the following condition met: 
      Browser back button is enabled and this will happen only if at least one previous page browsed.
*/
