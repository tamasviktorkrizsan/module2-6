import { $ } from '@wdio/globals'

class NavbarComponent {

  get dropdownMenu(){
    return $('#menu');
  }

  get languageSelector(){
    return $('#language');
  }

  get logoutButton(){
    return $('[data-test="nav-sign-out"]');
  }

  get DeButton(){
   return $('[data-test="lang-de"]');
  }

}

export default NavbarComponent;