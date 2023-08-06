import json from 'cypress/fixtures/example.json';
import GMapsElements from '../page_elements/g_maps.elements.js'


export class OpenGoogle {
  static acessarGoogle() {
      cy.fixture('example.json').then((json) => {
        cy.visit(json.url_google_maps)
      });
  }
  static fazerPesquisa() {
      cy.get(GMapsElements.MAPS_CMP_PESQUISA).type('NATAL, RN{ENTER}')
      cy.get(GMapsElements.BTN_ROTAS).click()
      cy.get(GMapsElements.BTN_INVERTER_ROTAS).click()
      cy.get(GMapsElements.CMP_ROTAS_DESTINO).type('AV PAULISTA, SÃO PAULO, SP{ENTER}')

    }

    static verificaTrajetos(){

      cy.get(GMapsElements.DIST_TRAJETO_CARRO).contains('3.070')  
      cy.get(GMapsElements.DIST_TRAJETO_MOTO).contains('2.800')    
      cy.get(GMapsElements.TRAJETO_AVIAO).click()   
      cy.get(GMapsElements.TEMP_AVIAO_DIRETO).contains('3 h 20 min')    
      cy.get(GMapsElements.TEMP_AVIAO_CONEX).contains('4 h 40 min+')    

    }

}
export default OpenGoogle;
