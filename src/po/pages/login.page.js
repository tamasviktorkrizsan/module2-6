import { $ } from '@wdio/globals'
import BasePage from '../components/common/base.page.js';

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

  get loginButton(){
    return $('[data-test="login-submit"]');
  }

  get registerTitle(){
  return $('[data-test="register-link"]');
  }

  get emailError(){
    return $('[id="email-error"]');
  }

 get passwordError(){
    return $('[id="password-error"]');
  }

  get loginError(){
    return $('[data-test="login-error"]');
  }

}

export default LoginPage;