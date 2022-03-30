describe('Protractor Element Array Finder Demp', function() {
  it('Finds First Element', function() {
    browser.get("https://material.angularjs.org/latest/demo/autocomplete")
    let sampleElement=element.all(by.repeater('section in menu.sections')).first(); 
    // Once we get the webelement we can perform any action on it like click, getText() etc.
});
});