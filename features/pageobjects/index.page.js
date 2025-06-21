import { $ } from '@wdio/globals'
import BasePage from './base.page.js';


class IndexPage extends BasePage {

  constructor(url){
    super(url)
  }

  get sortTitle(){  
    return $('.grid-title');
  }

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

  get searchResults(){
    return $('#app-overview');
  }

  get searchBox(){
    return $('#search-query');
  }

  async setSearchBox(text){
    await this.searchBox.setValue(text);
  }

  get searchButton(){
    return $('[data-test="search-submit"]');
  }

  get accountTitle(){  
    return $('[data-test="page-title"]');
  }

  get searchTerm(){
    return $('[data-test="search-term"]');
  }

  get searchCaption(){
    return $('[data-test="search-caption"]');
  }

  get cardTitle(){
    return $('[data-test="product-name"]');
  }

  get noResultsText(){
    return $('[data-test="no-results"]');
  }

}

export default IndexPage;