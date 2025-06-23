import { Given, When, Then } from '@wdio/cucumber-framework';

import * as chai from 'chai';

const should = chai.should();

import IndexPage from '../../po/pages/index.page.js'

let indexPage = new IndexPage(process.env.URL);


Given('the user is on the index page', async () => {
  
    await browser.reloadSession();
  
    await indexPage.open();

});


When('the user clicks on the language selector', async function () {
    
    await indexPage.navbar.languageSelector.click();
});



When('the user clicks the language button DE', async function () {
    
    await indexPage.navbar.DeButton.click();

});


When('the user clicks on the search box', async function () {
    
    await indexPage.searchBox.click();

});

When('the user types text {string}', async function (string) {
    
    await indexPage.setSearchBox(string);

});


When('the user clicks the Search button', async function () {
    
     await indexPage.searchButton.click();


});

     
Then('the product with the name {string} will be displayed', async function (string) {
    

    await indexPage.searchCaption.waitForDisplayed();

    const card = await indexPage.cardTitle.getText();

    await card.should.include(string);


});

Then('the text {string} will be displayed', async function (string) {
    
    await indexPage.searchCaption.waitForDisplayed();

    const searchResults = await indexPage.noResultsText.getText();

    await searchResults.should.equal('There are no products found.');

});

 
Then('the user redirected to the index page with text {string}', async function (string) {
    

    await browser.waitUntil(async function () {
      return (await indexPage.sortTitle.getText()) === string
      }, 
      
      {
        timeout: 5000
      }

    );

    const sortTitle = await indexPage.sortTitle.getText();

    sortTitle.should.equal(string);


});
