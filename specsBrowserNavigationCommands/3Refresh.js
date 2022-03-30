describe('Browser Navigation', () => {
    it('Exampe of refresh method', () => {
       browser.get('https://material.angularjs.org')
       .then(()=>(browser.sleep(5000)))
       .then(()=>(browser.navigate().refresh()))
       .then(()=>(browser.sleep(5000)));
    });
 });

/*
    Protractor navigation commands - The "refresh" method
    Purpose: The protractor command refresh() is used to refresh the current page.

    Syntax: browser.navigate().refresh(): promise.Promise<void>

    Returns: This command returns a promise that will be resolved when the navigation event has completed.
*/
