{
    function welcome() {
        console.log("welcome in my currency exchange");
    }
      welcome();


    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currentCoursElement = document.querySelector(".js-currentCourse");
    const resultElement = document.querySelector(".js-result");
    
    formElement.addEventListener("submit", (event) =>{
        event.preventDefault();
        
        const amount = amountElement.value;
        const currentCourse = currentCoursElement.value;
        const result = amount*currentCourse;
        resultElement.innerText = result.toFixed(2);
    } );
 
   

}