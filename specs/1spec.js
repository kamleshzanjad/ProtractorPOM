describe("Print Suite/Describe block", function () {

  it("Test Case Name TC_1", function () {
    console.log("Print 1");
  });

});




/*
    A describe-block is like a test suite in Jasmine Test, it holds a set of test cases that are called "it". 
    Any test scripts begin with a keyword describe, it’s a global function provided by jasmine. 
    This takes two parameters string and function:
      The first parameter string is just the name of the test script.
      The second parameter is a function that consists of the whole bunch of code snippets or implementation of the test case.

    Describe-Block acts as a container for it-blocks. 
    Typically, a describe-block contains one or more it-blocks. 
    Describe block can be considered as a test suite as it holds multiple test cases.

    It-block is placed inside the describe-block in Jasmine Test, one it-block is equivalent to one test case. 
    Jasmine doesn’t restrict a number of it-blocks. 
    There can be any number of it-blocks inside the describe-block. 
    It is a global function in jasmine, Just like describe-block, 

    it-block takes two parameters one is a string and the other is function.
      The first parameter string is just the name of the test case.
      The second parameter is the function which consists of the whole bunch of code snippets or implementation of the test case.
*/


/*
Output is
        ProtractorProject $ protractor conf.js  --specs='specs/1spec.js'
        [07:40:20] I/launcher - Running 1 instances of WebDriver
        [07:40:20] I/direct - Using ChromeDriver directly...
        Started
        Print 1
        .


        1 spec, 0 failures
        Finished in 0.004 seconds

        [07:40:22] I/launcher - 0 instance(s) of WebDriver still running
        [07:40:22] I/launcher - chrome #01 passed       
*/