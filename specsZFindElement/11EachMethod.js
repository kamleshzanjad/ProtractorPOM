describe('Protractor each function demo', function () {
  it('Each function demo', function () {
      browser.get("https://material.angularjs.org/latest/demo/autocomplete")
      element.all(by.className('docs-menu'))
          .each((ele, index) => {
              if (ele != undefined){
                  ele.getText().then((text) => {
                      console.log(index, text);
                  });
              }
          });
  });
});

/*
$ protractor conf.js  --specs='specsZFindElement/11EachMethod*.js'
[13:30:15] I/launcher - Running 1 instances of WebDriver
[13:30:15] I/direct - Using ChromeDriver directly...
Started
0 Documentation Version
LATEST RELEASE (1.2.4)
Toggle collapsed
GETTING STARTED
DEMOS
Toggle expanded
Customization
CSS
Toggle collapsed
THEMING
Toggle collapsed
PERFORMANCE
Toggle collapsed
API Reference
LAYOUT
Toggle collapsed
SERVICES
Toggle collapsed
TYPES
Toggle collapsed
DIRECTIVES
Toggle collapsed
MIGRATION TO ANGULAR
CONTRIBUTORS
.


1 spec, 0 failures
Finished in 4.293 seconds

[13:30:21] I/launcher - 0 instance(s) of WebDriver still running
[13:30:21] I/launcher - chrome #01 passed
C02CV2EHMD6R:ProtractorProject kzanjad$ 
*/