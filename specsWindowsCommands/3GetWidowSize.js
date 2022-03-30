describe('Browser API Demo', () => {
    it('Example of get window size', () => {
       browser.get('https://material.angularjs.org')
       browser.manage().window().getSize()  //Usage of getSize() function
          .then((size)=>(console.log("Width:"+size.width+" Height:"+size.height)));
    });
 });

/*
$ protractor conf.js  --specs='specsWindowsCommands/3GetWidowSize.js'
    [10:15:36] I/launcher - Running 1 instances of WebDriver
    [10:15:36] I/direct - Using ChromeDriver directly...
    Started
    Width:1200 Height:982
    .


    1 spec, 0 failures
    Finished in 3.974 seconds

    [10:15:42] I/launcher - 0 instance(s) of WebDriver still running
    [10:15:42] I/launcher - chrome #01 passed
*/

/*
        Protractor Browser Window Commands - Get Browser Window Size
    Purpose: The function getSize() in the Window class is used to get the browser window size.

    Syntax: browser.manage().window().getSize(): Promise<ISize>

    Returns: This command returns a promise that will be resolved to the ISize object.
*/