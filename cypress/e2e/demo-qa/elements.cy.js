import PracticeForms from "../../pageObjects/PracticeForms";
import SortablePage from "../../pageObjects/SortablePage";


/*context("Forms page final task", () => {

    beforeEach(() => {
      PracticeForms.visit();
    });

    it("Filling in Registration Form", () => {
      PracticeForms.Name.type('Alex');
      PracticeForms.LastName.type('Jones');
      PracticeForms.Email.type('AlexJones@Inbox.lv');
      if(PracticeForms.GenderLabel.contains('Other')){
        PracticeForms.Gender.click({force:true});
      }
      PracticeForms.PhoneNumber.type('28596847');
      PracticeForms.DateOfBirth.click();
      
      PracticeForms.PickYear('1984');
      PracticeForms.PickMonth('February');
      PracticeForms.PickDate(29);


      PracticeForms.Subject.type('Math{enter}');
      if(PracticeForms.Hobbies.contains('Sports')){
        PracticeForms.CheckBox.click({force:true});
      }
      PracticeForms.CurrentAddress.type('jones street');
      PracticeForms.State.click();
      PracticeForms.State.contains('Haryana').click();
      PracticeForms.City.click();
      PracticeForms.TypedValue.type("karnal{enter}");
      PracticeForms.SubmitButton.click();
      PracticeForms.ValidateInput.contains('Alex');
      PracticeForms.ValidateInput.contains('Jones');
      PracticeForms.ValidateInput.contains('AlexJones@Inbox.lv');
      PracticeForms.ValidateInput.contains('Other');
      PracticeForms.ValidateInput.contains('29 February,1984');
      PracticeForms.ValidateInput.contains('28596847');
      PracticeForms.ValidateInput.contains('Math');
      PracticeForms.ValidateInput.contains('Sports');
      PracticeForms.ValidateInput.contains('jones street');
      PracticeForms.ValidateInput.contains('Haryana');
      PracticeForms.ValidateInput.contains('Karnal');


    });
  });*/
  context("Forms page final task", () => {
    beforeEach(() => {
      SortablePage.visit();
    });

    it("Sortable task", () => {

      const list =['One','Two','Three','Four','Five','Six'];
      const reversed =['Six','Five','Four','Three','Two','One'];
      for (let i = 0; i < list.length; i++) {
        if(list[i]===SortablePage.InOrder.contains(list[i])){
          return true;
        }
        
      }
      for (let b = 0; b < list.length; b++) {
        SortablePage.Items.contains(list[b]).trigger('mousedown').trigger('mousemove',{ which: 1,  pageY: 200 ,force:true}).trigger('mouseup',{force:true});
        
      }
      for (let x = 0; x < reversed.length; x++) {
        if(reversed[x]===SortablePage.InOrder.contains(reversed[x])){
          return true;
        }
        
      }
      
     
  });
})

  