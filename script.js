{
    function welcome() {
        console.log("welcome in my currency exchange");
    }
      welcome();
      
    const onFormSubmit = (event) =>{
    event.preventDefault();
    const amountElement = document.querySelector(".js-amount");
    const currentCoursElement = document.querySelector(".js-currentCourse");
    const resultElement = document.querySelector(".js-result");

    const amount = amountElement.value;
    const currentCourse = currentCoursElement.value;
    const result = amount*currentCourse;
    resultElement.innerText = result.toFixed(2);
} 
  
    const init = () =>{
   
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

   };

   init();
 
   

}