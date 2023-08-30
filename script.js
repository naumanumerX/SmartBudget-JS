let budget=document.querySelector("#budget");
let budgetBTN=document.querySelector("#budget-btn");

budgetBTN.addEventListener("click",(e)=>{
    
    e.preventDefault();
   
    
    if (budget.value === "") {
        alert("Budget is empty");
    } else {
        // Do something with the non-empty budget value
    }

})