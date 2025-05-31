
const {Given, When, Then} = require("@wdio/cucumber-framework");

const { browser } = require('@wdio/globals');

const LoginPage = require("../po/login.page");

const IndexPage = require("../po/index.page");


let loginPage = new LoginPage(process.env.URL + process.env.LOGIN_PATH);

let indexPage = new IndexPage(process.env.URL);




const MyAccountPage = require("../po/myAccount.page");

let myAccountPage = new MyAccountPage(process.env.URL + process.env.MY_ACCOUNT_PATH);


Given('the user is on the login page', async () => {
  await loginPage.open();
});


Given('the user enters email {string}', async function (email) {
    await loginPage.setEmail(email);

});


Given('the user enters password {string}', async function (password) {
    await loginPage.setPassword(password);
});


When('the user clears the {string} field', async function (string) {
    await loginPage.clear(string);
});


When('the user clicks the Login button', async function () {
    await loginPage.loginButton.click();
});



When('the user clicks the user menu', async function () {
    
    // Note: works in head mode but not in headless

    await indexPage.dropdownMenu.click();

    await indexPage.dropdownMenu.waitForDisplayed();

    

});


When('the user clicks the logout button', async function () {
    
    // Note: works in head mode but not in headless

    await indexPage.logoutButton.click();

});


Then('the error {string} should be displayed', async function (message) {
    await loginPage.checkErrorMessage(message);
});

      
Then('the user redirected to the my account page', async function () {
    // await myAccountPage.checkTitle(title);

    // await myAccountPage.checkUrl('/account');

     await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');

});




Then('the user redirected to the login page', async function () {
    

     await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');

});







// After(async function () {

//     await loginPage.open();

// });



























/* import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

 */