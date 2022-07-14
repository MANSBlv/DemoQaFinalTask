import BasePage from "./basePage";

class PracticeForms extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get Name(){
      return cy.get('#firstName');
  }

  static get LastName(){
      return cy.get('#lastName');
  }

  static get Email(){
      return cy.get('#userEmail');
  }

  static get Gender(){
      //return cy.get('#gender-radio-3');
      return cy.get('[id="gender-radio-3"]');
  }
  static get GenderLabel(){
      return cy.get('[for="gender-radio-3"]');
  }

  static get PhoneNumber(){
      return cy.get('#userNumber');
  }

  static get DateOfBirth(){
      return cy.get('#dateOfBirthInput');
  }

  static PickDate(date){
      return cy.get('[class="react-datepicker__week"]').parent().find('[role="option"]').not('.react-datepicker__day--outside-month').contains(date).click();
  }

  static PickMonth(month){
      return cy.get('div[class="react-datepicker"]').parent().find('select[class = "react-datepicker__month-select"]').select(month);
  }

  static PickYear(year){
      return cy.get('[class="react-datepicker__year-select"]').select(year);
  }

  static get Subject(){
      return cy.get('#subjectsContainer');
  }

  static get Hobbies(){
      return cy.get('[for="hobbies-checkbox-1"]');
  }

  static get CheckBox(){
      return cy.get("[value='1']");
  }

  static get CurrentAddress(){
      return cy.get('#currentAddress');
  }

  static get State(){
      return cy.get('#state');
  }

  static get City(){
      return cy.get('#city');
  }

  static get TypedValue(){
      return cy.get('#react-select-4-input');
  }

  static get SubmitButton(){
      return cy.get('#submit');
  }

  static get ValidateInput(){
      return cy.get("[class='table-responsive']");
  }

}

export default PracticeForms;