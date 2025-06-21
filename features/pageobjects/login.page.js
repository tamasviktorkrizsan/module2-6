import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class LoginPage extends BasePage {

  constructor(url){
    super(url)
  }

  get email(){
    return $("#email");
  }

  get password(){
    return $("#password");
  }

  async setEmail(email){
    await this.email.setValue(email);
  }


  async setPassword(password){
    await this.password.setValue(password);
  }

  /* async clear(field){
    await field;
    await browser.keys([Key.Ctrl,Key.Backspace]);
  }
 */

  get loginButton(){
    return $('[data-test="login-submit"]');
  }


  get errorMessage(){
    return $('[data-test=login-form]');
  }


  async checkErrorMessage(message){
    await expect(this.errorMessage.getValue(message));
  }

}

export default LoginPage;