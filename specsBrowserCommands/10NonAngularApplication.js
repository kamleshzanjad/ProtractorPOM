describe('Browser API Demo', () => {
  browser.waitForAngularEnabled(false); // Doesn't wait for angular application
     it('Enable protractor for non-angular application', () => {
         browser.get('https://toolsqa.com/');
     });
 });


/*
   Enable protractor for non-angular application
    The default behavior of protractor is that it waits for Angular http and other timeout tasks to complete before interaction. 
    If the webpage is nonangular then the test fails with below message:

    “Failed: Angular could not be found on the page https://xyz.com/. 
    If this is not an Angular application, you may need to turn off waiting for Angular”.

    In the above case, you must turn off the angular switch. 
    The waitforAngularEnabled() is used to turn off the angular switch in protractor. 
    This function accepts boolean as a parameter. 
    If set to false, Protractor will not wait for Angular http and timeout tasks to complete.
*/