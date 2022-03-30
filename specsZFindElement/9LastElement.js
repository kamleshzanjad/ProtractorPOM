describe('Protractor last element demo', function() {
  it('Get last element', function() {
      browser.get("https://material.angularjs.org/latest/demo/autocomplete")
      let sampleElement=element.all(by.repeater('section in menu.sections')).last();
      // Once we get the webelement we can perform any action on it like click, getText() etc.
  });
});