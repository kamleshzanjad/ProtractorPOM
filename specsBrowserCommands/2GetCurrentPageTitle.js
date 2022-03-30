
describe('Browser API Demo', () => {
	it('Get current page title', () => {
		browser.get('https://material.angularjs.org')
		.then(() => (browser.getTitle()))
		.then((title)=>(console.log(title)));
	});
});




/*
    Protractor Browser Commands - Get current page title in Protractor
    Purpose: The getTitle() function in ProtractorBrowser class is used to get the current page title.

    Syntax: browser.getTitle() : Promise<string>

    Returns: This returns a promise that will be resolved to the current page title as a string   

*/


/*
Output is
      $ protractor conf.js  --specs='specsBrowserCommands/2GetCurrentPageTitle.js'
    [11:12:22] I/launcher - Running 1 instances of WebDriver
    [11:12:22] I/direct - Using ChromeDriver directly...
    Started
    AngularJS Material - Introduction
    .


    1 spec, 0 failures
    Finished in 4.252 seconds

    [11:12:27] I/launcher - 0 instance(s) of WebDriver still running
    [11:12:27] I/launcher - chrome #01 passed              
*/