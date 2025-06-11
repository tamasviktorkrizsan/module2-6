const {Given, When, Then} = require("@wdio/cucumber-framework");

const IndexPage = require("../po/index.page");

let indexPage = new IndexPage(process.env.URL);


Given('the user is on the index page', async () => {
  await indexPage.open();
});


When('the user clicks on the language selector', async function () {
    
    await indexPage.languageSelector.click();
});



When('the user clicks the language button DE', async function () {
    
    await indexPage.DeButton.click();

});


When('the user clicks on the search box', async function () {
    
    await indexPage.searchBox.click();

});

When('the user types text {string}', async function (string) {
    
    await indexPage.setSearchBox(string);

});


When('the user clicks the Search button', async function () {
    
    await indexPage.searchBox.click();

});

     
Then('the product with the name {string} will be displayed', async function (string) {
    

     await indexPage.checkSearchResults(string);

});

Then('the text {string} will be displayed', async function (string) {
    

     await indexPage.checkSearchResults(string);

});

 
Then('the user redirected to the index page with text Sortieren', async function () {
    

     await indexPage.checkSortTitleLanguage('Sortieren');

});
