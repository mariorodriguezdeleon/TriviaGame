(function () {
    'use strict'
    require 'data.js'
})()

//Stand in questions for testing
let questions = [ 
    
    { question: "What suprised Alice about the white Rabbit?",
    answers: ['The White Rabbit had a pocket watch.',
             'something else',
             'it was blue',
             'it was not a rabbit'],
     correctAns: 'The White Rabbit had a pocket watch.'
    },
    
    {que2},
                
    {que3},
    
    {que4},
    
    {que5},
                
    {que6},
    
    {que7},
    
    {que8},
    
    {que9},
    
    {que10}]; //need to fill in the object properties

//handle for question holder to update
let questionHolder = $("#question-holder");

let showQuestion;

let questionIndex = 0;



for (let i=0; i < questions.length; i++) {
    
    question.html(questions[i]);
    console.log(question);
    
}

//what i want to do is append random answers to each question in the card
//keep track of the correct answer and dysplay a message to user if the answer
//correct.