describe('First Describe', () => {
    it('Sample 1', () => {
        console.log('Inside First describe');
    });
    describe('Second Nested Describe', () => { //Describe inside the describe 
        it('Sample 2', () => { 
            console.log('Inside second describe'); 
        });
    });
});

/*
Output is
        :ProtractorProject $ protractor conf.js  --specs='specs/4specNestedDescribeBlock.js'
        [07:55:53] I/launcher - Running 1 instances of WebDriver
        [07:55:53] I/direct - Using ChromeDriver directly...
        Started
        Inside First describe
        .Inside second describe
        .


        2 specs, 0 failures
        Finished in 0.005 seconds

        [07:55:55] I/launcher - 0 instance(s) of WebDriver still running
        [07:55:55] I/launcher - chrome #01 passed
        :ProtractorProject $ 
*/

/*
        Nested describe-block in Jasmine Test
        Nesting is one inside the other, same is applicable for describe also.
        A describe-block can have other describe-block inside it. 
        Consider below example there are two nested describe block inside the single spec file
*/