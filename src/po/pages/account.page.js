import { $ } from '@wdio/globals'
import BasePage from '../components/common/base.page.js';
import NavbarComponent from '../components/common/navbar.component.js';


class AccountPage extends BasePage {

  constructor(url){
    super(url)

    this.navbar = new NavbarComponent();
  
  }
  
  get accountTitle(){  
    return $('[data-test="page-title"]');
  }

}

export default AccountPage;