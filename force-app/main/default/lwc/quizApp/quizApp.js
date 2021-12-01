import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //for storing answers
    myQuestions=[
        {
            id: "Question1",
            question: "Which one of the file is invalid in LWC component folder",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id: "Question2",
            question: "Which one of the following is not a template loop",
            answers:{
                a:"for:each",
                b:"iteration",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id: "Question3",
            question: "Which one of the following is not a directive",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"map:loop"
            },
            correctAnswer:"c"
        }

    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
        //disables the button unless a selection is made
    }
    changeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        //const name = event.target.name; 
        //const value = event.target.value;
        //can also write above two as shorthand like this- 
        const {name,value} = event.target
        this.selected={...this.selected,[name]:value}   //to store these values in selected object. 
        //take whatever is selected
        // inside the property and name is key and store the value along the name property
        // in the backend -> this.selected={"Question 1":"a"} 
    }
    submitHandler(){

    }

    resetHandler(){

    }
}