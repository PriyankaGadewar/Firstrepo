import { LightningElement } from 'lwc';

export default class Lwc_1006_variables extends LightningElement {
    name ='Priyanka Gadewar';
    city ='Hyderabad';
    age =25;
    salary=1000000;

    callme(){
        this.name='Pragati Gadewar';
        this.city='chennai';
    }

}