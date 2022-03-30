describe("Browser API Demo", () => {
  it("Get current page URL", () => {
    browser
      .get("https://material.angularjs.org")
      .then(() => browser.getCurrentUrl())
      .then((url) => console.log(url));
  });
});

/*
      Protractor Browser Commands - Get current page URL in Protractor
      When multiple page navigation is involved in the spec, navigation can be confirmed by fetching current URL using getCurrentUrl() function.

      Purpose: The  getCurrentUrl() function in ProtractorBrowser class is used to get the current page URL.

      Syntax: browser.getCurrentUrl(): Promise<string>

      Returns: This returns a promise that will be resolved to the current page title as a string         
*/

/*
Output is
      $ protractor conf.js  --specs='specsBrowserCommands/3GetCurrentPageUrl.js'
      [11:16:55] I/launcher - Running 1 instances of WebDriver
      [11:16:55] I/direct - Using ChromeDriver directly...
      Started
      https://material.angularjs.org/latest/
      .


      1 spec, 0 failures
      Finished in 3.642 seconds

      [11:17:01] I/launcher - 0 instance(s) of WebDriver still running
      [11:17:01] I/launcher - chrome #01 passed            
*/
