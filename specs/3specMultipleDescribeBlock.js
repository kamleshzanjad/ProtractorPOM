describe('First Describe', () => {
   it('Sample 1', () => {
       console.log('Inside First describe');
   });
});
describe('Second Describe', () => { //Second describe outside first
   it('Sample 2', () => {
       console.log('Inside second describe');
   });
});

/*
Output is
         :ProtractorProject $ protractor conf.js  --specs='specs/3specMultipleDescribeBlock.js'
         [07:52:56] I/launcher - Running 1 instances of WebDriver
         [07:52:56] I/direct - Using ChromeDriver directly...
         Started
         Inside First describe
         .Inside second describe
         .


         2 specs, 0 failures
         Finished in 0.006 seconds

         [07:52:58] I/launcher - 0 instance(s) of WebDriver still running
         [07:52:58] I/launcher - chrome #01 passed
*/

/*
         Multiple independent describe-block in Jasmine Test
         A spec file will have multiple describe-block however those are independent of each other. 
         That means the outcome of one describe-block doesn't depend on others.  
         Put the describe-block one after the other to create multiple describe-block as shown in the below example.
*/