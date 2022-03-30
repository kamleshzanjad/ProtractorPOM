describe("Browser API Demo", () => {
  it("Get the client Session details", () => {
    browser
      .get("https://material.angularjs.org")
      .then(() => browser.getTitle())
      .then((title) => console.log("Page Title: " + title))
      .then(() => browser.getCurrentUrl())
      .then((url) => console.log("Current Page Url:" + url))
      .then(() => browser.getPageSource())
      //.then((source) => console.log("Page Source is: " + source))

      .then(() => browser.getSession())
      .then((session) => {
        console.log("Print Session id: " + session.getId());
      })

      .then(() => {
        browser.refresh();
      })
      .then(() => browser.restart())
      .then(() => browser.get("https://material.angular.io/"))

      .then(() => browser.close());
  });
});


/*
    $ protractor conf.js  --specs='specsBrowserCommands/9AllBrowserOperation.js'
    [11:44:33] I/launcher - Running 1 instances of WebDriver
    [11:44:33] I/direct - Using ChromeDriver directly...
    Started
    Page Title: AngularJS Material - Introduction
    Current Page Url:https://material.angularjs.org/latest/
    Print Session id: dd8edbd5febb7ab64e31e00d325cb441
    .


    1 spec, 0 failures
    Finished in 8.532 seconds

    [11:44:43] I/launcher - 0 instance(s) of WebDriver still running
    [11:44:43] I/launcher - chrome #01 passed
*/