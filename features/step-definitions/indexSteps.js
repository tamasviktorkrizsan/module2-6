const {Given, When, Then} = require("@wdio/cucumber-framework");

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


When('the user clicks on the search box', async function () {
    
    await indexPage.searchBox.click();

});

When('the user types text Wood Saw', async function () {
    
    await indexPage.setSearchBox('Wood Saw');

});

When('the user types text xyz', async function () {
    
    await indexPage.setSearchBox('xyz');

});


When('the user clicks the Search button', async function () {
    
    await indexPage.searchBox.click();

});


      
Then('the product with the name Wood Saw will be displayed', async function () {
    

     await indexPage.checkSearchResults('Wood Saw');

});

Then('the text There are no products found will be displayed', async function () {
    

     await indexPage.checkSearchResults('There are no products found');

});

 
Then('the user redirected to the login page with text Sortieren', async function () {
    

     await indexPage.checkSortTitleLanguage('Sortieren');

});
