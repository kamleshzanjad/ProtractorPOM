describe('Protractor ElementFinder Demo', function () {
    it('Get webelement example', () => {
        browser.get("https://material.angularjs.org/latest/demo/autocomplete")
        browser.sleep(4000);
        let sampleElement = element(by.css('#docs-menu-Demos'));
        expect(sampleElement.isPresent()).toBeFalsy('Expected element ' + sampleElement.locator() + ' Should be present and Visible'); //locator() is used here 
    }); 
});




/*
 GetWebElement() function in Protractor
Purpose: The element() returns value type of ElementFinder. However, if required we can use the getWebElement() function to get the element of type WebElement.

Syntax: element(locator).getWebElement(): WebElementPromise;

Returns: This function returns the value of type WebElementPromise



*/
