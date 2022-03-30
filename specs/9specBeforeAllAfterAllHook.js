describe("Suite 1 in Describe block 1", function () {
  beforeAll(() => {
    console.log("Before All Called");
  });

  afterAll(() => {
    console.log("After All Called");
  });

  it("TC_11", function () {
    console.log("Inside Suite 1 Test case 11");
  });

  it("TC_12", function () {
    console.log("Inside Suite 1 Test case 12");
  });

});

/*

    The beforeAll function is called only once before all the spec in describe-block are run, 
    and the afterAll function is called after all specs finish. 
    These functions can be used to speed up test suites with expensive setup and teardown.

*/

/*
protractor conf.js  --specs='specs/5specBeforeAllAfterAllHook.js'
          [07:46:24] I/launcher - Running 1 instances of WebDriver
          [07:46:24] I/direct - Using ChromeDriver directly...
          Started
          Before All Called
          Inside Suite 1 Test case 11
          .Inside Suite 1 Test case 12
          .After All Called



          2 specs, 0 failures
          Finished in 0.007 seconds

          [07:46:26] I/launcher - 0 instance(s) of WebDriver still running
          [07:46:26] I/launcher - chrome #01 passed
*/