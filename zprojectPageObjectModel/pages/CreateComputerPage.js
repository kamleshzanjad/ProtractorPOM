const { browser, element, by } = require("protractor");

var CreateComputerPage = function () {
  var EC = protractor.ExpectedConditions;

  let locCreateThisComputerButton = "//input[@value='Create this computer']";

  


  this.waitForCreateThisComputerButton = async function () {
    console.log("Inside method HomePage.waitForCreateThisComputerButton");
    let eleForVisibility = element(by.xpath(locCreateThisComputerButton));
    return browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(eleForVisibility), 10000);
      return eleForVisibility;
    });
  };



  this.setComputerNameText = async function (name) {
    console.log("Inside method HomePage.setComputerNameText");
    await element(by.name("name")).sendKeys(name);
  };
  this.setIntroducedDateText = async function (date) {
    console.log("Inside method HomePage.setIntroducedDateText");
    await element(by.id("introduced")).sendKeys(date);
  };
  this.setDiscontinuedDateText = async function (date) {
    console.log("Inside method HomePage.setDiscontinuedDateText");
    await element(by.id("discontinued")).sendKeys(date);
  };

  this.selectCompanyType = async function (option) {
    console.log("Inside method HomePage.clickSearchButton");
    element(by.cssContainingText("option", option)).click();
  };




  this.clickCreateThisComputerButton = async function () {
    console.log("Inside method HomePage.clickCreateThisComputerButton");
    await element(by.xpath(locCreateThisComputerButton)).click();
  };

  
  



};
module.exports = new CreateComputerPage();


