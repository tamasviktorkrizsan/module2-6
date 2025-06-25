import { $ } from '@wdio/globals'
import BasePage from './base.page.js';
import NavbarComponent from '../components/common/navbar.component.js';


class IndexPage extends BasePage {

  constructor(url){
    super(url)

  this.navbar = new NavbarComponent();

  }

  get sortTitle(){  
    return $('.grid-title');
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