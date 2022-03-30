//import { browser, by, element, ElementFinder } from 'protractor'
/// import { Driver } from 'selenium-webdriver/edge';
describe('Protractor ElementFinder Demo', function () {
  it('Uses ElementFinder', () => {
    browser.get("https://material.angularjs.org/latest/demo/autocomplete")
    let sampleElement = element(by.css('ul#docs-menu-Demos>li:nth-child(1) a')); //ElementFinder function used here 
    sampleElement.getAttribute('innerText').then((text) => {
      console.log(text);
    });
  });
});




/*
    Protractor ElementFinder

    Purpose: The element() function in protractor is used to locate the element in a web page.

    Syntax: element(locator):ElementFinder

    Parameters: This function accepts one parameter of type Locator. The locator can be found using multiple ways which will be covered in the next article.

Returns: This function returns value of type ElementFinder. One can perform various actions using the ElementFinder instance.
    */

/*
    $ protractor conf.js  --specs='specsZFindElement/1specFindElement.js'
    [13:05:32] I/launcher - Running 1 instances of WebDriver
    [13:05:32] I/direct - Using ChromeDriver directly...
    Started
    Autocomplete
    current page
    .


    1 spec, 0 failures
    Finished in 4.014 seconds

    [13:05:38] I/launcher - 0 instance(s) of WebDriver still running
    [13:05:38] I/launcher - chrome #01 passed
*/
