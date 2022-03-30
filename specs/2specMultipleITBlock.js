describe('A Sample Suite', () => {
  
  it('First Testcase', () => {
     console.log('First Testcase');
   });

   it('Second Testcase', () => {
      console.log('Second Testcase');
   });

});

/*
Output is
         ProtractorProject $ protractor conf.js  --specs='specs/2specMultipleITBlock.js'
         [07:42:17] I/launcher - Running 1 instances of WebDriver
         [07:42:17] I/direct - Using ChromeDriver directly...
         Started
         First Testcase
         .Second Testcase
         .


         2 specs, 0 failures
         Finished in 0.005 seconds

         [07:42:19] I/launcher - 0 instance(s) of WebDriver still running
         [07:42:19] I/launcher - chrome #01 passed
*/

/*
         Note: It-Block is also known as a "spec" in Jasmine. 
         Few people may call it a "test" as well.
*/