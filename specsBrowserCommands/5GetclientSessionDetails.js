describe("Browser API Demo", () => {
  it("Get the client Session details", () => {
    browser
      .get("https://material.angularjs.org")
      .then(() => browser.getSession())
      .then(session => {
        console.log("Print Session id: "+ session.getId())
        console.log(session);
      }
      );
  });
});

/*
    Protractor Browser Commands - Get client session details in Protractor
    Purpose: The getSession() function in ProtractorBrowser class is used to get the information of the client session. Information such as sessionId, capability, etc.

    Syntax: browser.getSession():Promise<Session>

    Returns: This command returns a promise which will be resolved to type Session
*/

/*
Output is
      $ protractor conf.js  --specs='specsBrowserCommands/5GetclientSessionDetails.js'
[11:27:32] I/launcher - Running 1 instances of WebDriver
[11:27:32] I/direct - Using ChromeDriver directly...
Started
Print Session id: 921f7ea069ca436e65815ea5b776a0ae
Session {
  id_: '921f7ea069ca436e65815ea5b776a0ae',
  caps_: Capabilities {
    map_: Map {
      'acceptInsecureCerts' => false,
      'acceptSslCerts' => false,
      'browserConnectionEnabled' => false,
      'browserName' => 'chrome',
      'chrome' => [Object],
      'cssSelectorsEnabled' => true,
      'databaseEnabled' => false,
      'goog:chromeOptions' => [Object],
      'handlesAlerts' => true,
      'hasTouchScreen' => false,
      'javascriptEnabled' => true,
      'locationContextEnabled' => true,
      'mobileEmulationEnabled' => false,
      'nativeEvents' => true,
      'networkConnectionEnabled' => false,
      'pageLoadStrategy' => 'normal',
      'platform' => 'Mac OS X',
      'proxy' => {},
      'rotatable' => false,
      'setWindowRect' => true,
      'strictFileInteractability' => false,
      'takesHeapSnapshot' => true,
      'takesScreenshot' => true,
      'timeouts' => [Object],
      'unexpectedAlertBehaviour' => 'ignore',
      'version' => '99.0.4844.83',
      'webStorageEnabled' => true,
      'webauthn:extension:credBlob' => true,
      'webauthn:extension:largeBlob' => true,
      'webauthn:virtualAuthenticators' => true
    }
  }
}
.


1 spec, 0 failures
Finished in 3.539 seconds

[11:27:38] I/launcher - 0 instance(s) of WebDriver still running
[11:27:38] I/launcher - chrome #01 passed          
*/
