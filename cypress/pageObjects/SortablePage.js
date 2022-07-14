import BasePage from "./basePage";

class SortablePage extends BasePage {
  static get url() {
    return "/sortable";
  }

  static get InOrder(){
      return cy.get('#demo-tabpane-list');
  }

  static get Items(){
      return cy.get('[class="list-group-item list-group-item-action"]'/*'.list-group-item-action'*/);
  }
}

export default SortablePage;
