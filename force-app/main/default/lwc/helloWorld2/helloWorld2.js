import { LightningElement } from 'lwc';

export default class HelloWorld2 extends LightningElement {

    isVisible = false
    handleClick(){
        this.isVisible=true
    }
}