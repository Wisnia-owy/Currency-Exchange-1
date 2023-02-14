let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currentCoursElement = document.querySelector(".js-currentCourse");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    let amount = amountElement.value;
    let currentCourse = currentCoursElement.value;
    let result = amount*currentCourse;
    resultElement.innerText = result.toFixed(2);
} );