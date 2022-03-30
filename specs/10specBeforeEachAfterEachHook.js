describe("Suite 1 in Describe block 1", function () {
  beforeEach(() => {
    console.log("Before Each Called");
  });

  afterEach(() => {
    console.log("After Each Called");
  });

  it("TC_11", function () {
    console.log("Inside Suite 1 Test case 11");
  });

  it("TC_12", function () {
    console.log("Inside Suite 1 Test case 12");
  });

});

/*
    As the name implies, the beforeEach function is called once before each spec/test/it-block in describe-block. 

    And afterEach function also behaves the same as beforeEach function but it executed once after each it-block. 
    Typically if anything needs to be executed before or after each test case those set of code will be placed here.
*/

/*
protractor conf.js  --specs='specs/6specBeforeEachAfterEachHook.js'
      [07:44:28] I/launcher - Running 1 instances of WebDriver
      [07:44:28] I/direct - Using ChromeDriver directly...
      Started
      Before Each Called
      Inside Suite 1 Test case 11
      After Each Called
      .Before Each Called
      Inside Suite 1 Test case 12
      After Each Called
      .


      2 specs, 0 failures
      Finished in 0.006 seconds

      [07:44:30] I/launcher - 0 instance(s) of WebDriver still running
      [07:44:30] I/launcher - chrome #01 passed
*/
