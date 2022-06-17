import { LightningElement,track,wire } from 'lwc';
import getContactList from '@salesforce/apex/CL_1506_DataTable1.getContactList';

import { updateRecord } from 'lightning/uiRecordApi';    //Mandate for DML Operation
import {refreshApex} from '@salesforce/apex';         //optional for refreshing


import NAME_FIELD from '@salesforce/schema/Contact.Name';   //Mandate, field on which DML opration will happen
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';   //Mandate, field on which DML opration will happen
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';  //Mandate, field on which DML opration will happen
import ID_FIELD from '@salesforce/schema/Contact.Id';     //Mandate, field on which DML opration will happen

const COLSS = [
               {label:'Enter First Name', fieldName:'Name', editable:true},
               {label:'Enter Last Name', fieldName:'LastName', editable:true},
               {label:'Enter Phone', fieldName:'Phone', type:'phone',editable:true},
               {label:'Enter Email', firldName:'Email', type:'email'}
              ];
export default class Lwc_1506_DataTable1 extends LightningElement {

    @track col = COLSS;
    @track draftValues;
    @track error;

    @wire(getContactList) contact;

    handleSave(event){
        alert('save called');
 
        const fields ={};
        fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
        fields[NAME_FIELD.fieldApiName] = event.detail.draftValues[0].Name;
        fields[LASTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].LastName;
        fields[PHONE_FIELD.fieldApiName] = event.detail.draftValues[0].Phone;

        alert('fields called');
        const recordInputs ={fields};

        updateRecord(recordInputs).then(()=> {
            alert('Data Saved Successfully');
            this.draftValues=[];   //clear all draft values
            return refreshApex(this.contact); //refresh the table
        }).catch(error =>{});
    }
  
}