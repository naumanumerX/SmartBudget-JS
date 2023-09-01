let budget=document.querySelector("#budget");
let budgetBTN=document.querySelector("#budget-btn");
let totalBudget=document.querySelector("#total-budget");

budgetBTN.addEventListener("click",(e)=>{
    
    e.preventDefault();
   
    
    if (budget.value === "") {
        alert("Budget is empty");
    } else {
        localStorage.setItem("budget",budget.value);
       location.href=location.href;
    }

})
//Storing Products in local storage
let title=document.querySelector("#title");
let  cost=document.querySelector("#cost");
let productBtn=document.querySelector("#product-btn");


    productBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        let p_title=title.value;
        let p_cost=cost.value;
        if(p_title!="" || p_cost!="" ){
          let data={
                p_title:p_title,
                p_cost:p_cost
          };
          
          let dataToString=JSON.stringify(data);
          localStorage.setItem("budget_"+title.value,dataToString); //dynamic Key
          location.href=location.href;
        }
         else
         alert("form is empty");
         
            
         
    });
   
//Displaying fetched Data
let bProduct=document.querySelector("#bProduct");
let bProduct_Cost=document.querySelector("#bProduct-cost");
let expense_list=document.querySelector("#expense-list");
let balance_left=document.querySelector("#balance-left") ;
const displayData=()=>{

    let i=0;
    let jsonData;
            let jsonParse;
    for (i=0;i<localStorage.length;i++){
        let allKeys=localStorage.key(i);
         if(allKeys.match("budget_")){
             jsonData=localStorage.getItem(allKeys);
             jsonParse=JSON.parse(jsonData);
expense_list.innerHTML+= `<div class="row mt-3 mb-3" id="b-border" >  <div class="col-md-6 d-flex justify-content-between">        <h5 id="bProduct">${jsonParse.p_title}</h5>      <h5 id="price">${jsonParse.p_cost}</h5>  </div>  <div class="col-md-6 d-flex justify-content-end ">   <i class="fa fa-edit"></i>&nbsp; &nbsp; <i class="fa fa-trash delete-btn"></i>  </div></div>`
          

         }
    }

    let tBudget=localStorage.getItem("budget");
    totalBudget.innerHTML=tBudget;
//      let c=jsonParse.p_cost;
//     console.log(c);
//     let bLeft=Number(tBudget)-Number(c);
//    balance_left.innerHTML=bLeft;
   
    let price_tag=document.querySelectorAll("#price");
    //console.log("in",price_tag.innerHTML)
    let j=0;
    let price=[];
    //console.log(j);
    for(j=0;j<price_tag.length;j++){
     //  alert();
     price[j]=price_tag[j].innerHTML;
   // price.push(parseInt(price[j]));

    }
    let price_int=[];
    let fPrice=0;
    for(j=0;j<price_tag.length;j++){
        //  alert();
      //  price[i]=price_tag[j].innerHTML;
       price_int.push(parseInt(price[j]));
       fPrice +=price_int[j];
   
   
       }
       
       let tExpenses=document.getElementById("total-expense")
       
       tExpenses.innerHTML=fPrice;
        
       balance_left.innerHTML=tBudget-fPrice;

 }
 displayData();

 // delete
// delete

let deleteBtn = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function() {
   let confirm=window.confirm("Do you want to delete ? click on okay to delete");
   if(confirm){
    let del_parent = this.parentElement;
    let div_parent = del_parent.parentElement;
    let fChild = div_parent.querySelector("#bProduct").innerHTML;
    
   localStorage.removeItem("budget_"+fChild);
   location.href=location.href;
   
   }
   else{
    alert("data is not deleted")
   }
  });
}

 
  