const { browser, element } = require("protractor");

describe("Suite Search", function () {
  let url = "http://computer-database.gatling.io/computers";
  let locSearchTextBox_CSS = "input#searchbox";
  let locSearchButton_XPath = "//input[@id='searchsubmit']";
  let locComputerFound_XPath = "//h1[contains(text(), 'computers found'  )]";

  beforeAll(() => {
    console.log("Before All Called");
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().setScriptTimeout(20000);
  });

  it("Search Using Computer Name IBM", function () {
    
    browser.get(url);

    var EC = protractor.ExpectedConditions;
    let elemSearchTextBox = element(by.css(locSearchTextBox_CSS));
    let elemComputerFound = element(by.xpath(locComputerFound_XPath));

    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemSearchTextBox), 10000);
      return elemSearchTextBox;
    });

    element(by.css(locSearchTextBox_CSS)).sendKeys("IBM");
    element(by.xpath(locSearchButton_XPath)).click();

    browser.driver.wait(function () {
      browser.wait(EC.visibilityOf(elemComputerFound), 10000);
      return elemComputerFound;
    });

    browser.sleep(5000);


    console.log("Printing computer Name");
    element
      .all(by.xpath("//table[@class='computers zebra-striped']//tr/td[1]"))
      .each((ele, index) => {
        if (ele != undefined) {
          ele.getText().then((text) => {
            console.log("Computer Name at index " + index + " is: " + text);
          });
        }
      });
  });
});


/*
    $ protractor conf.js  --specs='zproject/2searchComputerUsingDifferentCriteria.js'
    [11:36:19] I/launcher - Running 1 instances of WebDriver
    [11:36:19] I/direct - Using ChromeDriver directly...
    Started
    Before All Called
    Printing computer Name
    Computer Name at index 0 is: IBM 1401
    Computer Name at index 1 is: IBM 305
    Computer Name at index 2 is: IBM 3270
    Computer Name at index 3 is: IBM 5100
    Computer Name at index 4 is: IBM 650
    Computer Name at index 5 is: IBM 701
    Computer Name at index 6 is: IBM 7030
    Computer Name at index 7 is: IBM 7090
    Computer Name at index 8 is: IBM 801
    Computer Name at index 9 is: IBM AP-101
*/

/*
<input type="search" id="searchbox" name="f" value="" placeholder="Filter by computer name..." required="required">
<input type="submit" id="searchsubmit" value="Filter by name" class="btn primary">
<h1>574 computers found</h1>

<table class="computers zebra-striped"><thead><tr><th class="col-name header headerSortUp">
<a href="/computers?p=0&amp;n=10&amp;s=name&amp;d=desc">Computer name</a></th><th class="col-introduced header "><a href="/computers?p=0&amp;n=10&amp;s=introduced&amp;d=asc">Introduced</a></th><th class="col-discontinued header "><a href="/computers?p=0&amp;n=10&amp;s=discontinued&amp;d=asc">Discontinued</a></th><th class="col-company header "><a href="/computers?p=0&amp;n=10&amp;s=companyName&amp;d=asc">Company</a></th></tr></thead><tbody><tr><td><a href="/computers/381">ACE</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td><a href="/computers/501">AN/FSQ-32</a></td><td>01 Jan 1960</td><td>-</td><td>IBM</td></tr><tr><td><a href="/computers/500">AN/FSQ-7</a></td><td>01 Jan 1958</td><td>-</td><td>IBM</td></tr><tr><td><a href="/computers/388">APEXC</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td><a href="/computers/355">ARRA</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td><a href="/computers/385">ASCI Blue Mountain</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td><a href="/computers/313">ASCI Blue Pacific</a></td><td>01 Jan 1998</td><td>-</td><td>IBM</td></tr><tr><td><a href="/computers/384">ASCI Purple</a></td><td>01 Jan 2005</td><td>-</td><td>IBM</td></tr><tr><td><a href="/computers/382">ASCI Red</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td><a href="/computers/383">ASCI Thors Hammer</a></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>


 element.all(by.xpath(loc_DynamicTable_XPath)).each((ele, index) => {
      if (ele != undefined) {
        ele.getText().then((text) => {
          console.log("Value is: " + text);
        });
      }
    });

      let numberOfComputersFound = await elemComputerFound.getText();
    console.log("Number of Computer found message is \n");
    console.log(numberOfComputersFound);

    let n = numberOfComputersFound.(" computers found", "")
    console.log(" Number of computers found are \n");
    console.log(n);
    expect(elemComputerFound).
*/

