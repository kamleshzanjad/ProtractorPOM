describe('Protractor Element Array Finder Demo', function() {
    it('Protractor Element Array Finder', function() {
        browser.get("https://material.angularjs.org/latest/demo/autocomplete")
        let sampleElements=element.all(by.repeater('section in menu.sections'))
    });
});



/*
 

*/
