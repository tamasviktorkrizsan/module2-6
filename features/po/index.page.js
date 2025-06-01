const { $ } = require('@wdio/globals');
const BasePage = require('./base.page.js');
const {Key} = require("webdriverio");


class IndexPage extends BasePage {

  constructor(url){
    super(url)
  }


get sortTitle(){  


return $('/html/body/app-root/app-header/nav/div/div/div/ul/li[1]/a');

}


get dropdownMenu(){

return $('//*[@id="menu"]');

}

get languageSelector(){

return $('//*[@id="language"]');

}


get logoutButton(){

    return $('/html/body/app-root/app-header/nav/div/div/ul/li[4]/ul/li[7]/a');
}


get DeButton(){
  return $('/html/body/app-root/app-header/nav/div/div/div/ul/li[1]/a');
}

get searchResults(){
  return $('/html/body/app-root/div/app-overview');
}


async checkSortTitleLanguage(text){  

  
    await expect(this.sortTitle.getValue(text));
  }


  async checkSearchResults(text){  

  
    await expect(this.searchResults.getValue(text));
  }



 get searchBox(){
    return $('[id="search-query"]');
  }

  async setSearchBox(text){
    await this.searchBox.setValue(text);
  }


  get searchButton(){
    return $('/html/body/app-root/div/app-overview/div[3]/div[1]/form[2]/div/button[2]');
  }



}

module.exports = IndexPage;