describe('Browser API Demo', () => {
  it('Refresh the current page', () => {
      browser.get('https://material.angular.io/').then(()=>{
          browser.refresh();
      });
  });
});


/*
    Protractor Browser Commands- Refresh the current page in Protractor
    This refresh function is used for making full reload of the current page. 
    This method assumes that the current application is angular application and it waits for angular to load before executing the next command. 
    It's not recommended to use if the page is not angular.

    Purpose: The refresh() function in ProtractorBrowser class is used to refresh the current page.

    Syntax: browser.refresh():Promise<any>

    Returns: This command returns the promise which will be resolved to any type.
*/