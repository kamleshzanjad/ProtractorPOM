describe('Protractor ElementFinder Demo', function () {
	it('Example of equals function in protractor', function () {
		browser.get("https://material.angularjs.org/latest/demo/autocomplete")
		let sampleElement = element(by.id('docs-menu-Demos'))
		.element(by.repeater('page in section.pages')); //Create a sample element

		let clonedSampleElement = sampleElement.clone(); // Create a copy using clone function

		sampleElement.equals(clonedSampleElement)  //Equals function used here
		.then((isEqual)=>(console.log('Euqality Check :'+isEqual))) // Value of euquals function displayed in console log
	});
});



/*
 
Cloning web element in Protractor ElementFinder
    Purpose: The clone() function is helpful if one needs to do a shallow copy of ElementFinder. basically, this method creates an exact copy of the source. clone() is rarely used function.

    Syntax: element(locator).clone(): ElementFinder

    Returns: This function returns element of type ElementFinder

Equals function in Protractor ElementFinder
        Purpose: The equals() method is used to compare two elements.

        Syntax:element(element:ElementFinder|WebElement).equals(element:ElementFinder|WebElement):Promise<boolean>;

        Parameter: This function accepts a parameter which is another element to compare

        Returns: This function returns a promise that will be resolved to type bolean.


$ protractor conf.js  --specs='specsZFindElement/5CloneEqu*.js'
        [13:19:27] I/launcher - Running 1 instances of WebDriver
        [13:19:27] I/direct - Using ChromeDriver directly...
        Started
        [13:19:33] W/element - more than one element found for locator by.repeater("page in section.pages") - the first result will be used
        [13:19:33] W/element - more than one element found for locator by.repeater("page in section.pages") - the first result will be used
        Euqality Check :true
        .


        1 spec, 0 failures
        Finished in 4.088 seconds

        [13:19:33] I/launcher - 0 instance(s) of WebDriver still running
        [13:19:33] I/launcher - chrome #01 passed
*/
