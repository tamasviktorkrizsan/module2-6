const { $, expect, browser } = require('@wdio/globals');
const BasePage = require('./base.page.js');


class MyAccountPage extends BasePage{

  constructor(url){
    super(url)

  }


  get title(){

    return $('//*[@data-test="page-title"]');

  } 


  async checkUrl(url){

  await expect(browser).toHaveUrlContaining(url);

  }



}

module.exports = MyAccountPage;