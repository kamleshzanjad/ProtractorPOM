describe('Protractor get element by index demo', function() {
  it('Get element by index', function() {
      browser.get("https://material.angularjs.org/latest/demo/autocomplete")
      let sampleElement=element.all(by.repeater('section in menu.sections')).get(0);
  });
});