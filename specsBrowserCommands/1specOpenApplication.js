
describe("Suite Browser Commands", function () {

  it("Test Case Browser Commands TC_1", function () {

     browser.get('https://material.angular.io/',10);
     // Angular url 
  });

});




/*
    Protractor Browser Commands
  Browser API is one of the most used API in Protractor, most of the code always dependent on Browser API. 
  Browser API not just controls the operation of browser methods but also all the webdriver related activity will be taken care of by this.

  In Protractor, "browser" is an instance of ProtractorBrowser class. ProtractorBrowser class is a wrapper around WebDriver Interface,
  which provides additional functionality, in turn, makes protractor easy and fast coding.



  Navigate to specific URL or webpage in Protractor
        Purpose: The get() function in ProtractorBrowser class is used to navigate the specific page.

        Syntax: browser.get(destination: string):Promise<any>

        Parameter: This command accepts one parameter i.e URL to be navigated. Basically, this URL is a string.

        Return: This returns a promise that will be resolved to type any.

        Note: Any is data type in typescript. If a variable is declared with <any> data-type then any type of value can be assigned to that variable.

        Optionally it accepts the timeout, Once the browser.get() command is executed. 
        It navigates to specified URL and protractor waits for the angular to load, 
        This timeout parameter is the number of milliseconds to wait for Angular to start.

              Syntax with Timeout: browser.get(destination: string, timeout?: number)

*/


/*
Output is
        $ protractor conf.js  --specs='specsBrowserCommands/1specOpenApplication.js'
      [11:05:20] I/launcher - Running 1 instances of WebDriver
      [11:05:20] I/direct - Using ChromeDriver directly...
      Started
      .


      1 spec, 0 failures
      Finished in 2.399 seconds

      [11:05:25] I/launcher - 0 instance(s) of WebDriver still running
      [11:05:25] I/launcher - chrome #01 passed           
*/