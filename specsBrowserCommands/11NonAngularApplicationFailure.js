describe('Browser API Demo', () => {
  //browser.waitForAngularEnabled(false); // Doesn't wait for angular application
     it('Enable protractor for non-angular application', () => {
         browser.get('https://toolsqa.com/');
     });
 });


/*

        Error if we comment watiForAngularEnable 
        $ protractor conf.js  --specs='specsBrowserCommands/11NonAngularApplicationFailure.js'
        [11:49:50] I/launcher - Running 1 instances of WebDriver
        [11:49:50] I/direct - Using ChromeDriver directly...
        Started
        [11:50:04] E/protractor - Could not find Angular on page https://toolsqa.com/ : retries looking for angular exceeded
        F

        Failures:
        1) Browser API Demo Enable protractor for non-angular application
        Message:
            Failed: Angular could not be found on the page https://toolsqa.com/. If this is not an Angular application, you may need to turn off waiting for Angular.
                                    Please see 
                                    https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
        Stack:
            Error: Angular could not be found on the page https://toolsqa.com/. If this is not an Angular application, you may need to turn off waiting for Angular.
                                    Please see 
                                    https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
                


   
*/