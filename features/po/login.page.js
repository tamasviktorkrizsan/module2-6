const { $ } = require('@wdio/globals');
const BasePage = require('./base.page.js');
const {Key} = require("webdriverio");


class LoginPage extends BasePage {

  constructor(url){
    super(url)
  }

  get email(){
    return $('[id="email"]');
  }

  get password(){
    return $('[id="password"]');
  }

  async setEmail(email){
    await this.email.setValue(email);
  }


  async setPassword(password){
    await this.password.setValue(password);
  }

  async clear(field){
    await field;
    await browser.keys([Key.Ctrl,Key.Backspace]);
  }


  get loginButton(){
    return $('[value="Login"]');
  }


  get errorMessage(){
    return $('[data-test=login-form]');
  }


  async checkErrorMessage(message){
    await expect(this.errorMessage.getValue(message));
  }

}

module.exports = LoginPage;