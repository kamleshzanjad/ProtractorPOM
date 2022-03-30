describe("Browser API Demo", () => {
  it("Get the current page source", () => {
    browser
      .get("https://material.angularjs.org")
      .then(() => browser.getPageSource())
      .then((source) => console.log(source));
  });
});

/*
    Protractor Browser Commands - Get the current page source in Protractor
    This returns the page source returned is a representation of the underlying DOM. 
    Do not expect it to be formatted or escaped in the same way as the response sent from the webserver.

    Purpose: The getPageSource() function in ProtractorBrowser class is used to get the HTML source code of the current page.

    Syntax: browser.getPageSource(): Promise<string>

    Returns: This returns a promise that will be resolved to the current page title as a string
*/

/*
Output is
      
        </menu-link>
      </li><!-- end ngRepeat: page in section.pages --><li ng-repeat="page in section.pages" class="ng-scope">
        <menu-link section="page" class="ng-isolate-scope"><a class="md-button md-ink-ripple" ng-transclude="" ng-class="{'active' : isSelected()}" ng-href="api/directive/mdMenuBar" ng-click="focusSection()" href="api/directive/mdMenuBar">
      md-menu-bar
      <!-- ngIf: isSelected() -->
    </a>
    </menu-link>
      </li><!-- end ngRepeat: page in section.pages --><li ng-repeat="page in section.pages" class="ng-scope">
        <menu-link section="page" class="ng-isolate-scope"><a class="md-button md-ink-ripple" ng-transclude="" ng-class="{'active' : isSelected()}" ng-href="api/directive/mdNavBar" ng-click="focusSection()" href="api/directive/mdNavBar">
      md-nav-bar
      <!-- ngIf: isSelecte            
*/
