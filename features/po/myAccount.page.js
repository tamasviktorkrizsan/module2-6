const { $, expect } = require('@wdio/globals');
const BasePage = require('./base.page.js');


class MyAccountPage extends BasePage{

  constructor(url){
    super(url)

  }


  get title(){

    return $('//*[@data-test="page-title"]');

  } 


  async checkTitle(title){

  await expect(this.title.toHaveTextContaining(title));

  }

}

module.exports = MyAccountPage;