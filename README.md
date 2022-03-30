Download & Install Node https://nodejs.org/en/download/
Dowload VS Code https://code.visualstudio.com/download

Open command prompt and type 
node –v
npm install -g protractor
npm install -g jasmine
npm install -g typescript
tsc -v
protractor ––version
webdriver-manager update
webdriver-manager start


or use package.json file 
npm install

Issue in case of Protractor or Webdriver manage
npm update protractor -g

webdriver-manager update


Note: Points to Remember
    Describe block holds one or more it blocks
    Multiple describe blocks can be nested or can be made independent in single file
    BeforeEach and AfterEach block can be used to
    execute a specific set of code before or after every test cases respectively.
    BeforeAll and AfterAll block can be used to set up asks that execute once per test suite or describe block
    Any test suite or test case can be executed specifically without executing all, prefix with f to describe or it block
    Any test suite or test case can be disabled by prefixing with x (ex: xit, xdescribe)
    It function without a body will not be executed and results will be marked as pending.

Execution command
    protractor conf.js  --specs='specs/1spec.js'
    protractor conf.js  --specs='specs/2specMultipleITBlock.js'
    protractor conf.js  --specs='specs/3specMultipleDescribeBlock.js'
    protractor conf.js  --specs='specs/4specNestedDescribeBlock.js'

    protractor conf.js  --specs='specs/5specFocusDescribeBlock.js'
    protractor conf.js  --specs='specs/6specFocusItBlock.js'
    protractor conf.js  --specs='specs/7specSkipped_Describe_Block.js'
    protractor conf.js  --specs='specs/8specSkippedITBlock.js'

    protractor conf.js  --specs='specs/9specBeforeAllAfterAllHook.js'
    protractor conf.js  --specs='specs/10specBeforeEachAfterEachHook.js'


Browser Commands
    protractor conf.js  --specs='specsBrowserCommands/1specOpenApplication.js'
    protractor conf.js  --specs='specsBrowserCommands/2GetCurrentPageTitle.js'
    protractor conf.js  --specs='specsBrowserCommands/3GetCurrentPageUrl.js'
    protractor conf.js  --specs='specsBrowserCommands/4GetCurrentPageSource.js'
    protractor conf.js  --specs='specsBrowserCommands/5GetclientSessionDetails.js'

    protractor conf.js  --specs='specsBrowserCommands/6refreshBrowser.js'
    protractor conf.js  --specs='specsBrowserCommands/7restartBrowser.js'
    protractor conf.js  --specs='specsBrowserCommands/8closeBrowser.js'
    protractor conf.js  --specs='specsBrowserCommands/9AllBrowserOperation.js'
    protractor conf.js  --specs='specsBrowserCommands/10NonAngularApplication.js'
    protractor conf.js  --specs='specsBrowserCommands/11NonAngularApplicationFailure.js'

Browser Navigation Commands & wild card
    protractor conf.js  --specs='specsBrowserNavigationCommands/*Back*.js'
    protractor conf.js  --specs='specsBrowserNavigationCommands/*Forw*.js'
    protractor conf.js  --specs='specsBrowserNavigationCommands/*fres*.js'
    protractor conf.js  --specs='**/4To.js'



Browser Windows Commands
    protractor conf.js  --specs='specsWindowsCommands/1MaximizeWindow.js'
    protractor conf.js  --specs='specsWindowsCommands/2SetWidowSize.js'
    protractor conf.js  --specs='specsWindowsCommands/3GetWidowSize.js'
    protractor conf.js  --specs='specsWindowsCommands/4SetWidowPosition.js'
    protractor conf.js  --specs='specsWindowsCommands/5GetWidowPosition.js'



FindElement
    protractor conf.js  --specs='specsZFindElement/1specFindElement.js'
    protractor conf.js  --specs='specsZFindElement/2specFindSubElement.js'
    protractor conf.js  --specs='specsZFindElement/3specJavascriptExecutor.js'
    protractor conf.js  --specs='specsZFindElement/4specLocatorFunction.js'
    protractor conf.js  --specs='specsZFindElement/5CloneEqu*.js'

    protractor conf.js  --specs='specsZFindElement/6ElementArrayFinder.js'
    protractor conf.js  --specs='specsZFindElement/7ElementArrayFindeSubElement*.js'
    protractor conf.js  --specs='specsZFindElement/8FirstEl*.js'
    protractor conf.js  --specs='specsZFindElement/9LastElement*.js'
    protractor conf.js  --specs='specsZFindElement/10ElementByIndes*.js'
    protractor conf.js  --specs='specsZFindElement/11EachMethod*.js'
    protractor conf.js  --specs='specsZFindElement/12CountFunction*.js'




    Project 
        protractor conf.js  --specs='zproject/1searchComputer.js'
        protractor conf.js  --specs='zproject/2searchComputerUsingDifferentCriteria.js'
        protractor conf.js  --specs='zproject/3searchComputerAsyncAwait.js'
        protractor conf.js  --specs='zproject/4AddComputer.js'
        protractor conf.js  --specs='zproject/5AddComputerJson.js'
        protractor conf.js  --specs='zproject/6UpdateComputer.js'
        protractor conf.js  --specs='zproject/7DeleteComputer.js'

 Project using POM
        protractor conf.js  --specs='zprojectPageObjectModel/testcases/1searchComputer.js'
        protractor conf.js  --specs='zprojectPageObjectModel/testcases/2AddComputer.js'
        
  Exercise
   run at suite
   allure report
   browser options
   headless 
   parallel execution
    Hooks like onPrepare , beforeSuite