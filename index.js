Question = [
    {
        "question": "What is the capital of France?",
        "options": ["Paris", "London", "Rome", "Berlin"],
        "answer": "Paris"
    },
    {
        "question": "What is the largest planet in our solar system?",
        "options": ["Earth", "Jupiter", "Mars", "Saturn"],
        "answer": "Jupiter"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        "answer": "Pacific Ocean"
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
        "answer": "William Shakespeare"
    },
    {
        "question": "What is the chemical symbol for water?",
        "options": ["Wo", "H2O", "WA", "W"],
        "answer": "H2O"
    }
]



let quest = document.querySelector("#question")
let option = document.querySelector("#option")
let count = 0
let result = 0

function displayQuestionAndOptions() {
    quest.innerText = Question[count].question;
    options(count);
}

displayQuestionAndOptions();


function options(count) {
    let optionsHTML = '';
    for (let i = 0; i < Question[count].options.length; i++) {
        optionsHTML += `<lable><input type="radio" name="option" value="${Question[count].options[i]}"> ${Question[count].options[i]}</lable><br>`;
    }
    option.innerHTML = optionsHTML;
}


function submit() {
    let selectedOpt = document.querySelector('input[name="option"]:checked')

    if(!selectedOpt){
        alert("Please select an option");
        return
    }

    
    if(selectedOpt.value === Question[count].answer){ 
        result = result +1
        
        console.log(result)
    }
    
    console.log(selectedOpt.value)

    count = count + 1
    if (Question.length === count) {
        alert(`Quiz ended! Your score: ${result}/${Question.length}`);
        count = 0;
        result = 0;
    }



    quest.innerText = Question[count].question
    options(count)
}