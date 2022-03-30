const { browser, element, by } = require("protractor");

var HomePage = function () {
  var EC = protractor.ExpectedConditions;

  //let url = "http://computer-database.gatling.io/computers";
  let locSearchTextBox_CSS = "input#searchbox";
  let locSearchButton_XPath = "//input[@id='searchsubmit']";
  let locComputerFound_XPath = "//h1[contains(text(), 'computers found'  )]";
  let locAddComputerButton = "//a[text()='Add a new computer']";

  this.navigateToApplication = async function (url) {
    console.log("Inside method HomePage.navigateToApplication");
    await browser.get(url);
  };

  this.waitForSearchButton = async function () {
    console.log("Inside method HomePage.waitForSearchButton");
    let elemSearchTextBox = element(by.css("input#searchbox"));
    return browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemSearchTextBox), 10000);
      return elemSearchTextBox;
    });
  };

  this.setSearchText = async function (searchCriteria) {
    console.log("Inside method HomePage.setSearchText");
    await element(by.css(locSearchTextBox_CSS)).sendKeys(searchCriteria);
  };

  this.clickSearchButton = async function () {
    console.log("Inside method HomePage.clickSearchButton");
    await element(by.xpath(locSearchButton_XPath)).click();
  };

  this.getSearchResultText = function () {
    console.log("Inside method HomePage.getSearchResultText");
    return element(by.xpath(locComputerFound_XPath)).getText();
  };

  this.getListOfComputerName = async function () {
    console.log("Inside method HomePage.getListOfComputerName");
    return element
      .all(by.xpath("//table[@class='computers zebra-striped']//tr/td[1]"))
      .map(function(elm) {
        return elm.getText();   
      })
  };

  this.getComputerName = async function () {
    console.log("Inside method HomePage.getComputerName"); 
    return element(by.xpath("//table[@class='computers zebra-striped']//tr[1]/td[1]")).getText().then((text) => {
      return text;
    });
  };

  this.getComputerName2 = async function () {
    console.log("Inside method HomePage.getComputerName2");
    return await element(by.xpath("//table[@class='computers zebra-striped']//tr[2]/td[1]")).getText();

  };

  this.clickAddComputerButton = async function(){
    console.log("Inside method HomePage.clickAddComputerButton");
    await element(by.xpath(locAddComputerButton)).click();
  }


  this.waitForAlertMessage = async function () {
    console.log("Inside method HomePage.waitForAlertMessage");
    let elemAlertMessage = element(
      by.xpath("//div[@class='alert-message warning']")
    );
    return browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemAlertMessage), 10000);
      return elemAlertMessage;
    });
  };

 


  this.getAlertMessage = async function () {
    console.log("Inside method HomePage.getAlertMessage");
    return await element(
      by.xpath("//div[@class='alert-message warning']")
    ).getText();

  };



};
module.exports = new HomePage();

/*

  this.getListOfComputerName = async function () {
    console.log("Inside method HomePage.getListOfComputerName");
    return element
      .all(by.xpath("//table[@class='computers zebra-striped']//tr/td[1]"))
      .each((ele, index) => {
        if (ele != undefined) {
          return ele.getText().then((text) => {
            //console.log(text);
            return text;
          });
          //return   ele.getText();
        }
      });
  };*/
