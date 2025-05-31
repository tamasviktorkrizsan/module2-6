
const {BeforeAll, Given, When, Then, After} = require("@wdio/cucumber-framework");

const LoginPage = require("../po/login.page");
const MyAccountPage = require("../po/myAccount.page");

let loginPage = new LoginPage(process.env.URL + process.env.LOGIN_PATH);

let myAccountPage = new MyAccountPage(process.env.URL + process.env.MY_ACCOUNT_PATH)



BeforeAll(async function () {
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


Then('the error {string} should be displayed', async function (message) {
    await loginPage.checkErrorMessage(message);
});

     
Then('validate the title {string} in the My account page.', async function (title) {
    await myAccountPage.checkTitle(title);
});


After(async function () {

    await loginPage.open();

});





























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