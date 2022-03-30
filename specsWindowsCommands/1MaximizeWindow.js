describe("Browser API Demo Maximize Window", () => {
  browser.manage().window().maximize(); //Maximize window command
  it("Test", () => {
    browser
      .get("https://material.angularjs.org")
      .then(() => console.log("Test"));
  });
});

/*
    Protractor Browser Window Commands - Maximize Browser Window
    When the test has been executed, the browser will be launched in a default mode which is not maximized. 
    It is always recommended to run the tests in the maximized window as the visual area will be more. 
    The browser window can be maximized using the Maximize command.

    Purpose: The function maximize() in the Window class is used to maximize the browser window.

    Syntax: browser.manage().window().maximize() :Promise<void>

    Returns: This command returns a promise that will be resolved to the void type.

*/
