const { $ } = require('@wdio/globals');
const BasePage = require('./base.page.js');
const {Key} = require("webdriverio");


class IndexPage extends BasePage {

  constructor(url){
    super(url)
  }

  
get dropdownMenu(){

return $('//*[@id="menu"]');

}


  get logoutButton(){
    return $('/html/body/app-root/app-header/nav/div/div/ul/li[4]/ul/li[7]/a');
  }






}

module.exports = IndexPage;