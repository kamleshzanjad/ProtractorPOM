describe('A Describe block', () => {
  fit('Sample 1', () => { //f is prefixed to this it 
      console.log('First it block');
  });
  it('Sample 2', () => {
      console.log('Second it block');
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
    :ProtractorProject $ protractor conf.js  --specs='specs/6specFocusItBlock.js'
    [08:02:06] I/launcher - Running 1 instances of WebDriver
    [08:02:06] I/direct - Using ChromeDriver directly...
    Started
    First it block
    .


    Ran 1 of 2 specs
    1 spec, 0 failures
    Finished in 0.004 seconds

    [08:02:08] I/launcher - 0 instance(s) of WebDriver still running
    [08:02:08] I/launcher - chrome #01 passed
*/