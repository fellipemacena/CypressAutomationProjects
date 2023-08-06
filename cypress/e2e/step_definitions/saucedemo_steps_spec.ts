import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import OpenSauce from '../pages/page_actions/acessar_saucedemo';

Given('que acesso o site Saucedemo com usuário standard', function () {
  OpenSauce.accessSauce();
  OpenSauce.loginSauce();

});


Then('verifico as funcionalidades do mesmo', function () {
  OpenSauce.addProductCart();
  OpenSauce.validProductCart();
  OpenSauce.removeProductCart();
  OpenSauce.addProductCart();
  OpenSauce.finishCart();
  OpenSauce.checkoutOverview();
  

});
