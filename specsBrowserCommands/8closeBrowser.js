describe("Browser API Demo", () => {
  it("Get the client Session details", () => {
    browser
      .get("https://material.angularjs.org")
      .then(()=>(browser.close())) ;
  });
});

/*
    Protractor Browser Commands - Close the current browser window in Protractor
    Purpose: The close() function in ProtractorBrowser class is used to close the current instance of the browser.

    Syntax: browser.close():Promise<void>

    Returns: This command returns the promise which will be resolved to void type. (Void means it does not return anything)

    Note: Protractor automatically closes after the execution of all tests or specs. However, if needed user can close the current browser window forcibly using close() command.       
*/
