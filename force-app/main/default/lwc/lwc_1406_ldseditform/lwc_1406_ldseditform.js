import { LightningElement, api } from 'lwc';

export default class Lwc_1406_ldseditform extends LightningElement {
    @api recordId = "0035j00000PsReHAAV";

    clearme(event){
      const inputFields=this.template.querySelectorAll("lightning-input-field");
      inputFields.forEach(field =>{
        alert('Hi i am working');
        field.reset();
    }
    );
    }
}