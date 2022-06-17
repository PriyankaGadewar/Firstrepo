import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import FAX_FIELD from '@salesforce/schema/Account.Fax';
import SIC_FIELD from '@salesforce/schema/Account.Sic';
export default class Lwc_RecordFormCustomeField extends LightningElement {
    abc = ACCOUNT_OBJECT;
    myfields = [NAME_FIELD,PHONE_FIELD,RATING_FIELD,FAX_FIELD,SIC_FIELD];
}