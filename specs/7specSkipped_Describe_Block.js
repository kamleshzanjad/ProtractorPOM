xdescribe('First Describe', () => { //x is prefixed to describe
  it('Sample 1', () => {
      console.log('Inside First describe');
  }
  );
});
describe('Second Describe', () => {
  it('Sample 2', () => {
      console.log('Inside second describe');
  });
});


/*
    Disable test suite (describe-block) in Jasmine Test
    Let's consider the scenario, where there are multiple describe-block. 
    Our requirement is not to execute just one particular scenario out of hundreds. 
    Basically, disabling that one scenario and this can be achieved by prefixing "x" to describe or it-block.    

    Take a look at the above example, since x is prefixed at first, describe-block will never get executed. 
    Only second describe-block gets executed. x can be prefixed to any number of describe-block. 
    Keep in mind that those test cases will never get executed until x prefix is removed.
*/

/*
    :ProtractorProject $ protractor conf.js  --specs='specs/7specSkipped_Describe_Block.js'
    [08:08:31] I/launcher - Running 1 instances of WebDriver
    [08:08:31] I/direct - Using ChromeDriver directly...
    Started
    Inside second describe
    .


    Ran 1 of 2 specs
    1 spec, 0 failures
    Finished in 0.005 seconds

    [08:08:33] I/launcher - 0 instance(s) of WebDriver still running
    [08:08:33] I/launcher - chrome #01 passed

*/