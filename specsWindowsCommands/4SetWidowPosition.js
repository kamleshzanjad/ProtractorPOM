describe('Browser API Demo  - Set window position', () => {
	browser.manage().window().setPosition(400, 500); // Usage of setPosition() function

	it('Test', () => {
		browser.get('https://material.angularjs.org');
	});
});



/*
        Protractor Browser Window Commands - Set Browser Window Position
        Purpose: The function setPosition() in the Window class is used to place the browser at a specific location on the screen.

        Syntax: browser.manage().window().setPosition(x_in_number, y_in_number): Promise<void>

        Parameter: In the above syntax it accepts two parameters. 
        The desired horizontal position, relative to the left side of the screen and the desired vertical position, 
        relative to the top of the screen respectively.

        Returns: This command returns a promise that will be resolved to the void type
*/