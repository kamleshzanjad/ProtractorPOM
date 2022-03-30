describe("Suite 1 in Describe block 1", function () {
  
  it("TC_11", function () {
    console.log("Suite 1 Test case 11");
  });

  it("TC_12", function () {
    console.log("Suite 1 Test case 12");
  });
  
});

fdescribe("Suite 2 in Describe block 2", function () {
  
  it("TC_21", function () {
    console.log("Suite 2 Test case 21");
  });

  it("TC_22", function () {
    console.log("Suite 2 Test case 22");
  });
  
});


/*
    Jasmine provides the functionality to the user, that one can execute specific test cases or test suites. 
    The character "f" is prefixed with either describe-block or it-block. 
    Prefixing "f" will make execution focus on only that block i.e executes only that test case.

    Jasmine provides the functionality to execute only specific spec, 
    for example, if there are two it blocks inside describer and 
    if there is a need to execute only one it-block, that can be done by prefixing ***f ***to it
*/

/*
    :ProtractorProject $ protractor conf.js  --specs='specs/5specFocusDescribeBlock.js'
    [08:00:05] I/launcher - Running 1 instances of WebDriver
    [08:00:05] I/direct - Using ChromeDriver directly...
    Started
    Suite 2 Test case 21
    .Suite 2 Test case 22
    .


    Ran 2 of 4 specs
    2 specs, 0 failures
    Finished in 0.006 seconds

    [08:00:07] I/launcher - 0 instance(s) of WebDriver still running
    [08:00:07] I/launcher - chrome #01 passed
*/