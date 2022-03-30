describe('Protractor count function demo', function () {
    it('Counts number of elements', function () {
        browser.get("https://material.angularjs.org/latest/demo/autocomplete")
        let elementArray= element.all(by.repeater('section in menu.sections'));
        expect(elementArray.count()).toBeGreaterThan(5);

    });
});