import {browser} from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import IndexPage from '../pageobjects/index.page.js';

let loginPage = new LoginPage(process.env.URL + process.env.LOGIN_PATH);

let indexPage = new IndexPage(process.env.URL);


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

    await indexPage.waitForDisplayed;

    await indexPage.dropdownMenu.click();

});


When('the user clicks the logout button', async function () {
    

    await indexPage.logoutButton.click();

});


Then('the error {string} should be displayed', async function (message) {
  
    await loginPage.checkErrorMessage(message);

});

      
Then('the user redirected to the my account page', async function () {
    
   
   
     await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');

});


       
Then('the user redirected to the login page', async function () {
     
     await loginPage.waitForDisplayed;

     await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/auth/login');

});

