describe('Protractor ElementFinder Demo', function () {
	it('Get webelement example', () => {
		browser.get("https://material.angularjs.org/latest/demo/autocomplete")
		let sampleElement = element(by.css('#docs-menu-Demos > li:nth-child(2) > menu-link > a')).getWebElement(); //getWebElement() function used here
		browser.executeScript("arguments[0].click();", sampleElement); // Javscript click action by passing pure selenium element
		browser.sleep(4000);
	});
});




/*
 GetWebElement() function in Protractor
Purpose: The element() returns value type of ElementFinder. However, if required we can use the getWebElement() function to get the element of type WebElement.

Syntax: element(locator).getWebElement(): WebElementPromise;

Returns: This function returns the value of type WebElementPromise



*/
