const {Given, When, Then} = require("@wdio/cucumber-framework");

const { browser } = require('@wdio/globals');

const IndexPage = require("../po/index.page");

let indexPage = new IndexPage(process.env.URL);


Given('the user is on the index page', async () => {
  await indexPage.open();
});


When('the user clicks on the language selector', async function () {
    
    

    await indexPage.languageSelector.click();

    await indexPage.languageSelector.waitForDisplayed();

});

 

When('the user clicks the language button DE', async function () {
    
    await indexPage.DeButton.click();

});


Then('the user redirected to the login page with text Sortieren', async function () {
    

     await indexPage.checkSortTitleLanguage('Sortieren');

});
