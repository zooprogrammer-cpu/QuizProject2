import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //for storing answers
    correctAnswers = 0// to show the number of correct answer
    isSubmitted = false //use to show the result
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
        //2==3 is false, returns true as allNotSelected. 
        //In HTML file, for the submit buttondisabled={allNotSelected}
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
    //whever we click on the submit button it will receve an event
    // and since this submit button is inside a form, it always refreshes the page
    submitHandler(event){  
        event.preventDefault() //To prevent the submit button refreshing the page
        //this.selected ={"Question1":"a","Question2":"b","Question3":"c"}
        console.log("Is this working");
        let correct= this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)//item.id is a
        this.correctAnswers=correct.length
        this.isSubmitted = true
        //filter returns the item  if the expression is true
        console.log("this.correctAnswers",this.correctAnswers)
    }

    resetHandler(){
        this.selected ={}
        this.correctAnswers= 0
    }
}