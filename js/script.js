"use strict";

/* Variable to store form inputs -  */
// const form = document.querySelector("form");
const nameElement = document.querySelector("#name");
nameElement.focus();

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
const registerActivities = document.querySelector("#activities-box");
registerActivities.addEventListener("click", (e) => {
  const clicked = e.target;
  const clickedTypeTime = clicked.getAttribute("data-day-and-time");
  const activities = registerActivities.children;
  //if elements flagged, deflag them
  for (let i = 0; i < activities.length; i++) {
    if (clickedTypeTime == activities[i].children[2].innerHTML) {
      // console.log(clickedTypeTime);
      activities[i].children[0].classList.add('not-valid');
      e.target.classList.remove('not-valid')}
    }
for (let i = 0; i < activities.length; i++) {
  if (!clicked.checked && (activities[i].children[2].innerHTML == clickedTypeTime)) { 
      console.log('give it to me')
      activities[i].children[0].classList.remove('not-valid')
}
  // } else if (!clicked.checked && (activities[i].children[2].innerHTML == clickedTypeTime)) { 
  //     console.log('give it to me')
  //     activities[i].children[0].classList.remove('not-valid')
  // }
}
})
      

/* This listener will evaluates the cost
 */
const activitiesR = document.querySelector("#activities");
const total = document.querySelector("#activities-cost");
let totalCost = 0;
activitiesR.addEventListener("change", (e) => {
  const clicked = e.target;
  let clickedCost = clicked.getAttribute("data-cost");
  clickedCost = Number(clickedCost);
  if (clicked.checked) {
    totalCost += clickedCost;
  } else {
    totalCost -= clickedCost;
  }
  total.textContent = `Total: $${totalCost}`;
  //   console.log(typeof clickedCost);
  const activities = activitiesR.children;
});

// payment module

const payment = document.querySelector("#payment");
// const paymentOptions = paymentMethod.children;

const paypal = document.querySelector(".paypal");
const bitcoin = document.querySelector(".bitcoin");
// creditCardExpMonth.style.visibility = 'hidden';
// creditCardYearBox.style.visibility = 'hidden';
// creditCardNumber.style.visibility = 'hidden';
// creditCardZip.style.visibility = 'hidden';
// creditCardCvv.style.visibility = 'hidden';
const creditCard = (payment.children[2].setAttribute = "selected");
paypal.style.visibility = "hidden";
bitcoin.style.visibility = "hidden";

payment.addEventListener("change", (e) => {
  const clicked = e.target.value;
  console.log(clicked);
  if (clicked == "paypal") {
    paypal.style.visibility = "visible";
  } else if (clicked == "bitcoin") {
    bitcoin.style.visibility = "visible";
  }
});

// validation module

const form = document.querySelector("form");
const nameForm = document.querySelector("#name");
const email = document.querySelector("#email");
// const languagesBox = document.querySelector('#languages-box');
// const languageTotalElement = document.querySelector('#language-total');
// let languageTotal = 0;

// const creditCardExpMonth = document.querySelector('.credit-card');
// const creditCardYearBox = document.querySelector('.year-box');
const creditCardNumber = document.querySelector("#cc-num");
const creditCardZip = document.querySelector("#zip");
const creditCardCvv = document.querySelector("#cvv");
// console.log(creditCardCvv);

function nameVerifier(nameForm) {
  const nameValue = nameForm.value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  // console.log('name: ' + nameIsValid);
  return nameIsValid
}


function emailVerifier(email) {
const emailValue = email.value;
  const emailIsValid = /[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  console.log('email ' + emailIsValid);
  return emailIsValid
}

function cardNumberVerifier(creditCardNumber) {
const creditCardNumberValue = creditCardNumber.value;
const creditCardNumberIsValid = /^4\d{3}([\ \-]?)(?:\d{4}\1){2}\d(?:\d{3})?$/.test(creditCardNumberValue);
  // console.log('cc: ' + creditCardNumberIsValid);
}

function zipVerifier(creditCardZip) {
const creditCardZipValue = creditCardZip.value;
const zipNumberIsValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(creditCardZipValue);
  // console.log('zc: ' + zipNumberIsValid);
  return zipNumberIsValid
}

function CvvVerifier(creditCardCvv) {
const creditCardCvvValue = creditCardCvv.value;
const CvvNumberIsValid = /^[0-9]{3,4}$/.test(creditCardCvvValue);
  // console.log('cvv: ' + CvvNumberIsValid);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  nameVerifier(nameForm);
  if (nameIsValid != true) {
  e.preventDefault();
  }
emailVerifier(email);
// if (emailIsValid != true) {
//   e.preventDefault();
// } 
cardNumberVerifier(creditCardNumber);
zipVerifier(creditCardZip);
CvvVerifier(creditCardCvv);
});