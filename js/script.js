"use strict";

/* Variable to store form inputs -  */
// const form = document.querySelector("form");
const nameElement = document.querySelector("#name");
nameElement.focus();
// const email = document.querySelector("#email");
// const email = document.querySelector("#email");
// const languagesBox = document.querySelector('#languages-box');
// const languageTotalElement = document.querySelector('#language-total');
// let languageTotal = 0;

const jobRole = document.querySelector(".title");
const jobOther = document.querySelector("#other-job-role");
jobOther.style.visibility = "hidden";
const selectorJobs = document.querySelector("#title");
const allJobs = document.querySelectorAll("#job");

selectorJobs.addEventListener("change", (e) => {
  if (e.target.value == "other") {
    jobOther.style.visibility = "visible";
  }
});

let selectorDesigns = document.querySelector("#design");
const selectorColor = document.querySelector("#color");
const colors = selectorColor.children;
console.log(colors);
const colorDiv = document.querySelector("#shirt-colors");
colorDiv.style.visibility = "hidden";

selectorDesigns.addEventListener("change", (e) => {
  const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
  const heartJS = document.querySelectorAll('[data-theme="heart js"]');

  if (e.target.value == "js puns") {
    for (let i = 0; i < jsPuns.length; i++) {
      colorDiv.style.visibility = "visible";
      jsPuns[i].style.visibility = "visible";
      heartJS[i].style.visibility = "hidden";
    }
  } else if (e.target.value == "heart js") {
    for (let i = 0; i < heartJS.length; i++) {
      colorDiv.style.visibility = "visible";
      heartJS[i].style.visibility = "visible";
      jsPuns[i].style.visibility = "hidden";
    }
  }
});

/* This listener will evaluates the data-day-and-time of ticked checkboxes and disable checkboxes that 
match concurrent time slots
*/ 
// const registerActivities = document.querySelector("#activities-box");
// registerActivities.addEventListener("change", (e) => {
//   const clicked = e.target;
//   const clickedTypeTime = clicked.getAttribute("data-day-and-time");
//   const activities = registerActivities.children;
//   for (let i = 0; i < activities.length; i++) {
//     if (clickedTypeTime == activities[i].children[2].innerHTML) {
//       console.log(clickedTypeTime);
//       activities[i].children[0].disabled = "true";
//     }
//   }
// });


/* This listener will evaluates the cost    
*/ 
const activitiesR = document.querySelector("#activities");
const total = document.querySelector('#activities-cost');
let totalCost = 0;
activitiesR.addEventListener("change", (e) => {
  const clicked = e.target;
  let clickedCost = clicked.getAttribute("data-cost");
  clickedCost = (Number(clickedCost));
  if (clicked.checked) {
  totalCost += clickedCost;
  } else {
  totalCost -= clickedCost;
  }
 total.textContent = `Total: $${totalCost}`; 
  
  console.log(totalCost);
//   console.log(typeof clickedCost);
  const activities = activitiesR.children;
});



// payment module

const payment = document.querySelector('#payment');
// const paymentOptions = paymentMethod.children; 



// const creditCardExpMonth = document.querySelector('.credit-card');
// const creditCardYearBox = document.querySelector('.year-box');
// const creditCardNumber = document.querySelector('.credit-card-box');
// const creditCardZip = document.querySelector('.zip-box');
// const creditCardCvv = document.querySelector('.cvv-box');
const paypal = document.querySelector('.paypal');
const bitcoin = document.querySelector('.bitcoin');
// creditCardExpMonth.style.visibility = 'hidden';
// creditCardYearBox.style.visibility = 'hidden';
// creditCardNumber.style.visibility = 'hidden';
// creditCardZip.style.visibility = 'hidden';
// creditCardCvv.style.visibility = 'hidden';
// const creditCard = payment.children[2].setAttribute = 'selected';
paypal.style.visibility = 'hidden';
bitcoin.style.visibility = 'hidden';

payment.addEventListener("change", (e) => {
  const clicked = e.target.value;
  console.log(clicked);
  if (clicked == 'paypal') {
paypal.style.visibility = 'visible';
  } else if (clicked == 'bitcoin'){
bitcoin.style.visibility = 'visible';
}
})
