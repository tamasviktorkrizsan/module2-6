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


  async checkSortTitleLanguage(text){  
    await expect(this.sortTitle.getValue(text));
  }


  async checkSearchResults(text){  
    await expect(this.searchResults.getValue(text));
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

}

export default IndexPage;