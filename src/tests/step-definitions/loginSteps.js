import {browser} from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, assert } from 'chai';

import LoginPage from '../../po/pages/login.page.js';
import AccountPage from '../../po/pages/index.page.js';

let loginPage = new LoginPage(process.env.URL + process.env.LOGIN_PATH);

let accountPage = new AccountPage(process.env.URL + process.env.ACCOUNT_PATH);


Given('the user is on the login page', async () => {
  await loginPage.open();
});


Given('the user enters email {string}', async function (email) {
    await loginPage.setEmail(email);

});


Given('the user enters password {string}', async function (password) {
    await loginPage.setPassword(password);
});


Given('the user is logged in', async function () {
    await loginPage.open();
    await loginPage.setEmail(process.env.email);
    await loginPage.setPassword(process.env.password);
});


When('the user clears the {string} field', async function (string) {
    await loginPage.clear(string);
});


When('the user clicks the Login button', async function () {
    await loginPage.loginButton.click();

});


When('the user clicks the user menu', async function () {

    await accountPage.waitForDisplayed;
    await accountPage.navbar.dropdownMenu.click();

});


When('the user clicks the logout button', async function () {
    

    await accountPage.navbar.logoutButton.click();

});


Then('the error "Email is required" should be displayed', async function () {
  
    await loginPage.emailError.waitForDisplayed();

    const errorText = await loginPage.emailError.getText();

    assert.equal(errorText, "Email is required");

});

Then('the error "Password is required" should be displayed', async function () {
  
    await loginPage.passwordError.waitForDisplayed();

    const errorText = await loginPage.passwordError.getText();

    assert.equal(errorText, "Password is required");

});


Then('the error "Invalid email or password" should be displayed', async function () {
  
    await loginPage.loginError.waitForDisplayed();

    const errorText = await loginPage.loginError.getText();

    assert.equal(errorText, "Invalid email or password");

});

      
Then('the user redirected to the my account page', async function () {
    
    await accountPage.navbar.dropdownMenu.waitForDisplayed();

    const currentUrl = await browser.getUrl();
    
    expect(currentUrl).to.equal(process.env.URL + process.env.ACCOUNT_PATH);

});


       
Then('the user redirected to the login page', async function () {
     
  await browser.waitUntil(async function () {
        
      return (await loginPage.registerTitle.getText()) === 'Register your account'
      
    }, 
      
    {
      timeout: 5000
    }

  );

  const currentUrl = await browser.getUrl();

  expect(currentUrl).to.equal(process.env.URL + process.env.LOGIN_PATH);

});

