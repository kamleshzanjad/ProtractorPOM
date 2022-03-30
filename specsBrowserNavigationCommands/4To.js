describe("Browser Navigation", () => {
  it("Exampe of to method", () => {
    browser
      .get("https://material.angularjs.org")
      .then(() => browser.sleep(5000)) //Sleep is added to pause the execution for sometime
      .then(() =>
        browser.navigate().to("https://protractortest.org/#/style-guide")
      ) // to() method is used here
      .then(() => browser.sleep(5000));
  });
});

/*
   Protractor - The "to" method
        Purpose: The to() method is used to navigate to a new URL.

        Syntax: browser.navigate().to(url:string): promise.Promise<void>

        Parameter: This command accepts one parameter i.e URL to be navigated. Basically, this URL is a string.

        Returns: This command returns a promise that will be resolved as URL as loaded.
*/
