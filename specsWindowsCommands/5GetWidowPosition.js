describe("Browser API Demo", () => {
  it("Example of get window position", () => {
    browser.get("https://material.angularjs.org");
    browser
      .manage()
      .window()
      .getPosition() // Usage of getPosition() function
      .then((position) =>
        console.log("Width:" + position.x + " Height:" + position.y)
      );
  });
});

/*
        $ protractor conf.js  --specs='specsWindowsCommands/5GetWidowPosition.js'
        [10:16:36] I/launcher - Running 1 instances of WebDriver
        [10:16:36] I/direct - Using ChromeDriver directly...
        Started
        Width:22 Height:47
        .


        1 spec, 0 failures
        Finished in 3.672 seconds

        [10:16:41] I/launcher - 0 instance(s) of WebDriver still running
        [10:16:41] I/launcher - chrome #01 passed
        */
/*
        Get Browser Window Position
        Purpose: The function setPosition() in the Window class retrieves the window's current position. 
        The number is relative to the top left corner of the screen.

        Syntax: browser.manage().window().getPosition(): Promise<ILocation>

        Returns: This command returns a promise that will be resolved to the ILocation object in the form of a {x:number, y:number} object literal.
*/
