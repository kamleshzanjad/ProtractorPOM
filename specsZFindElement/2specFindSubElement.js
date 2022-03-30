describe('Protractor ElementFinder Demo', ()=> {
  it('Should find sub elements', ()=> {
      browser.get("https://material.angularjs.org/latest/demo/autocomplete")
      let sampleElement=element(by.id('docs-menu-Demos')) // Element Finder 
      .element(by.repeater('page in section.pages')) //ElementFinder chained 
      .element(by.className('ng-isolate-scope')) //ElementFinder Chained
      .element(by.tagName('a')); //ElementFinder Chained
      sampleElement.getText()
      .then((text)=>(console.log(text)));
  });
});




/*
      Finding Sub Elements in Protractor
  ElementFinder can be used to build a chain of locators that are used to find the sub-element. An ElementFinder does not actually attempt to find the element until an action is called.

  Syntax: element(locators).element(subLocator):ElementFinder;


*/
