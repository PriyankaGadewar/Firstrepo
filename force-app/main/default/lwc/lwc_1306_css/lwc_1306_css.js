import { LightningElement, track } from 'lwc';

export default class Lwc_1306_css extends LightningElement {
    @track Name;

    callme(event){
       this.Name = event.target.value;
    }
}