const { browser, element, by } = require("protractor");

var CommonOperationPage = function () {
  var EC = protractor.ExpectedConditions;

  this.setUpBrowser =  async function () {
    console.log("Inside method CommonOperationPage.setUpBrowser");
    await browser.waitForAngularEnabled(false);
     browser.ignoreSynchronization = true;
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(10000);
    await browser.manage().timeouts().pageLoadTimeout(60000);
    await browser.manage().timeouts().setScriptTimeout(20000);
  };

  this.waitForSomeStaticTime = function(time){
    console.log("Inside method CommonOperationPage.waitForSomeStaticTime");
    browser.sleep(time);
  }

  
};
module.exports = new CommonOperationPage();

