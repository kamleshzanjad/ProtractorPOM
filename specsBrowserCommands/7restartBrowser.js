describe('Browser API Demo', () => {
  it('Restart the browser', () => {
      browser.get('https://material.angular.io/')
      .then(()=>(browser.restart()))
      .then(()=>(browser.get('https://material.angular.io/')));
  });
});


/*
    Restart the browser in Protractor
    Restart browser is done by closing the current browser instance automatically and creating a new one. But to note, restart function automatically overwrite all the previous settings such as maximize the window, angular switch, etc.

    Purpose: The restart() function in ProtractorBrowser class is used to restart the browser instance.

    Syntax: browser.restart():Promise<ProtractorBrowser>

    Returns: This command returns the promise which will be resolved to ProtractorBrowser type.
*/