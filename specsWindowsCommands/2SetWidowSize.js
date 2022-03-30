describe("Browser API Demo  Set Window Size", () => {
  browser.manage().window().setSize(400, 500); //Usage of setSize() function
  it("Example", () => {
    browser
      .get("https://material.angularjs.org")
      .then(() => console.log("Test"));
  });
});

/*
        Protractor Browser Window Commands - Set Browser Window Size
    Protractor allows setting the custom browser window size.
    Custom width and height can be mentioned in the Set Size function, the browser window will be resized to the mentioned width and height.

    Purpose: The function setSize() in the Window class is used to resize the browser window.

    Syntax: browser.manage().window().setSize(width_in_number: number, height_in_number: number) :Promise<void>

    Parameter: The setSize() accepts two parameters. The desired window width and the desired window height.

    Returns: This command returns a promise that will be resolved to the void type.



*/
