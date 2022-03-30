describe('First Describe',()=>{ 
  it('Sample 1',()=>{ 
      console.log('Inside First it'); 
  });
  xit('Sample 2',()=>{  // x is prefixed to this it
      console.log('Inside Second it'); 
  }); 
});


/*
    Disable test cases (it-block) in Jasmine Test
    Protractor provides the capability to disable test cases, i.e it-blocks. 
    In order to disable the block just prefix it with x. 
    But there is a noticeable difference between disabling the it-block and disabling the describe-block. 
    Disabled describe-block will not be shown in results but disabled it-block will be shown as pending.              
*/

/*
    :ProtractorProject $ protractor conf.js  --specs='specs/8specSkippedITBlock.js'
    [08:05:19] I/launcher - Running 1 instances of WebDriver
    [08:05:19] I/direct - Using ChromeDriver directly...
    Started
    Inside First it
    .*

    Pending:

    1) First Describe Sample 2
      Temporarily disabled with xit

    2 specs, 0 failures, 1 pending spec
    Finished in 0.006 seconds

    [08:05:21] I/launcher - 0 instance(s) of WebDriver still running
    [08:05:21] I/launcher - chrome #01 passed

*/