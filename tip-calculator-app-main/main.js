let inputEl = document.querySelector("#bills")
let noOfPeopleEl= document.querySelector("#people")
let tipBtnEl = document.querySelectorAll(".tip-btn")
let tipamountpersonEl = document.querySelector("#tip-amount-person")
let totalamountpersonEl = document.querySelector("#total-amount-person")
let resetEl = document.querySelector(".btn")
let element = document.querySelector(".ammend")
let example = document.createElement ("p")
let next = document.createTextNode("can't be zero")
example.appendChild(next)
element.appendChild(example)
let exam = document.querySelector(".ammend p")
exam.classList.add("exam-displayNone")
let inputBoxEl = document.querySelector(".input-box2")

let bill= 0
let people= 0;
let tipbtn = 0
// let tipamount=0
// let total= 0
// let tipamountperson=0
// let totalamountperson=0




inputEl.addEventListener("keyup", (e) =>{
    bill = Number(e.target.value);
    console.log(bill)
    }
)

noOfPeopleEl.addEventListener("keyup", (e) =>{
    people = Number(e.target.value);
    console.log(people)
    if (people === 0){
        inputBoxEl.classList.add("lower-input");
        exam.classList.replace("exam-displayNone", "exam-display")
    }
    else if (people != 0) { inputBoxEl.classList.remove("lower-input");
    exam.classList.replace("exam-display", "exam-displayNone")
    }
    } 
     
)

// inputBoxEl.addEventListener("keyup")

Array.from(tipBtnEl).forEach(tipbtns => {
    tipbtns.addEventListener("click", (e) =>{
        tipbtn= Number(e.target.innerText.replace ("%"," "))
        addactive(tipbtn);
        calculations();
    } )
});

function calculations() {
    let tipamount=  bill * tipbtn / 100;
    let total= bill + tipamount;
    let tipamountperson = tipamount/people;
    let totalamountperson = total/people;
    update({
        tipamountperson,
        totalamountperson 
    })
    
}

function update({tipamountperson, totalamountperson}){
    tipamountpersonEl.textContent = tipamountperson == Infinity ? "$0.00" : `$${tipamountperson.toFixed(2)}`;
    totalamountpersonEl.textContent = totalamountperson == Infinity ? 0 : `$${totalamountperson.toFixed(2)}`
}

function addactive (tipbtnn){
    Array.from(tipBtnEl).forEach(tipbtns =>{
        if (tipbtns.innerText.replace("%", " ") == (tipbtnn)) {
            tipbtns.classList.add("active")
        }
        else{tipbtns.classList.remove("active")}
    })
}


// function reset (){
//     inputEl.textContent= " "
//     noOfPeopleEl.textContent=" "
//     tipamountpersonEl.innerText = "0.00"
//     totalamountpersonEl.textContent= "0.00"
// }
// function addText(){

// }