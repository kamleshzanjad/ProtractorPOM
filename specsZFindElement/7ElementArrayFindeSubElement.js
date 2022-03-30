describe('Protractor Element Array Finder Demo', function () {
    it('ElementArray Finder demo', function () {
        browser.get("https://material.angularjs.org/latest/demo/autocomplete")
        let sampleElements = element(by.className('docs-menu')).all(by.repeater('section in menu.sections')) //chained locators sampleElement.then
        sampleElements.then(() => {
            sampleElements.getText().then((text) => {
                console.log(text);
            })
        })
    });
});



/*
  protractor conf.js  --specs='specsZFindElement/7ElementArrayFindeSubElement*.js'
[13:26:32] I/launcher - Running 1 instances of WebDriver
[13:26:32] I/direct - Using ChromeDriver directly...
Started
[
  'Documentation Version\nLATEST RELEASE (1.2.4)\nToggle collapsed',
  'GETTING STARTED',
  'DEMOS\n' +
    'Toggle expanded\n' +
    'Autocomplete\n' +
    'current page\n' +
    'Bottom Sheet\n' +
    'Button\n' +
    'Card\n' +
    'Checkbox\n' +
    'Chips\n' +
    'Colors\n' +
    'Content\n' +
    'Datepicker\n' +
    'Dialog\n' +
    'Divider\n' +
    'FAB Speed Dial\n' +
    'FAB Toolbar\n' +
    'Grid List\n' +
    'Icon\n' +
    'Input\n' +
    'List\n' +
    'Menu\n' +
    'Menu Bar\n' +
    'Nav Bar\n' +
    'Panel\n' +
    'Progress Circular\n' +
    'Progress Linear\n' +
    'Radio Button\n' +
    'Select\n' +
    'Sidenav\n' +
    'Slider\n' +
    'Subheader\n' +
    'Swipe\n' +
    'Switch\n' +
    'Tabs\n' +
    'Toast\n' +
    'Toolbar\n' +
    'Tooltip\n' +
    'Truncate\n' +
    'Virtual Repeat\n' +
    'Whiteframe',
  'Customization\n' +
    'CSS\n' +
    'Toggle collapsed\n' +
    'THEMING\n' +
    'Toggle collapsed\n' +
    'PERFORMANCE\n' +
    'Toggle collapsed',
  'API Reference\n' +
    'LAYOUT\n' +
    'Toggle collapsed\n' +
    'SERVICES\n' +
    'Toggle collapsed\n' +
    'TYPES\n' +
    'Toggle collapsed\n' +
    'DIRECTIVES\n' +
    'Toggle collapsed',
  'MIGRATION TO ANGULAR',
  'CONTRIBUTORS',
  ''
]
.


1 spec, 0 failures
Finished in 4.118 seconds

[13:26:38] I/launcher - 0 instance(s) of WebDriver still running
[13:26:38] I/launcher - chrome #01 passed

*/
