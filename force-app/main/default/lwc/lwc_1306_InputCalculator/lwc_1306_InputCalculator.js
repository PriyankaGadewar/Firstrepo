import { LightningElement , track} from 'lwc';

export default class Lwc_1306_InputCalculator extends LightningElement {
  @track  resvalue;
      num1;
      num2;

    callme(event){
      const evtname = event.target.name;  //where the event change will occured
      if(evtname=='aval'){                //If the name(id) is aval
        this.num1=event.target.value     //then assign the aval value to num1
      }
      else{
        this.num2=event.target.value
      }
    }
    addme(){
        const a= parseInt(this.num1);
        const b= parseInt(this.num2);
        this.resvalue= 'Sum of given number is' +(a+b);
    }
    sub(){
        const a= parseInt(this.num1);
        const b= parseInt(this.num2);
        this.resvalue ='Substraction of given number' +(a-b);
    }
    mul(){
        const a= parseInt(this.num1);
        const b= parseInt(this.num2);
        this.resvalue ='Multiplication of given number' +(a*b);  
    }
}