"use strict";

/* Variable to store form inputs -  */
// const form = document.querySelector("form");
const nameElement = document.querySelector("#name");
nameElement.focus();

// this part hides/shows credit card details fields when credit card payement is selected

const jobRole = document.querySelector("#payment");

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
  for (let i = 0; i < activities.length; i++) {
    if (clickedTypeTime == activities[i].children[2].innerHTML) {
      activities[i].children[0].classList.add("not-valid");
      e.target.classList.remove("not-valid");
    }
  }
  for (let i = 0; i < activities.length; i++) {
    if (
      !clicked.checked &&
      activities[i].children[2].innerHTML == clickedTypeTime
    ) {
      console.log("give it to me");
      activities[i].children[0].classList.remove("not-valid");
    }
  }
});

/* This listener will evaluates the added cost of selected activities
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
  const activities = activitiesR.children;
});

// payment module

const payment = document.querySelector("#payment");

const paypal = document.querySelector(".paypal");
const bitcoin = document.querySelector(".bitcoin");
// const creditCard = (payment.children[2].setAttribute = "selected");
const creditCardExpirationBox = document.querySelector(".expiration-box");
const creditCardBox = document.querySelector(".credit-card-box");
paypal.style.visibility = "hidden";
bitcoin.style.visibility = "hidden";
creditCardBox.style.visibility = "hidden";
creditCardExpirationBox.style.visibility = "hidden";

payment.addEventListener("change", (e) => {
  const clicked = e.target.value;
  console.log(clicked);
  if (clicked == "paypal") {
    paypal.style.visibility = "visible";
    bitcoin.style.visibility = "hidden";
    creditCardBox.style.visibility = "hidden";
    creditCardExpirationBox.style.visibility = "hidden";
  } else if (clicked == "bitcoin") {
    bitcoin.style.visibility = "visible";
    paypal.style.visibility = "hidden";
    creditCardBox.style.visibility = "hidden";
    creditCardExpirationBox.style.visibility = "hidden";
  } else if (clicked == "credit-card") {
    creditCardBox.style.visibility = "visible";
    creditCardExpirationBox.style.visibility = "visible";
    paypal.style.visibility = "hidden";
    bitcoin.style.visibility = "hidden";
  }
});
// const jobRole = document.querySelector("#payment");

// const jobOther = document.querySelector("#other-job-role");
// jobOther.style.visibility = "hidden";
// const selectorJobs = document.querySelector("#title");
// const allJobs = document.querySelectorAll("#job");

// selectorJobs.addEventListener("change", (e) => {
//     if (e.target.value == "other") {
//         jobOther.style.visibility = "visible";
//     }
// });

// validation module

const form = document.querySelector("form");
const nameForm = document.querySelector("#name");
const email = document.querySelector("#email");
const creditCardNumber = document.querySelector("#cc-num");
const creditCardZip = document.querySelector("#zip");
const creditCardCvv = document.querySelector("#cvv");

function nameVerifier(nameForm) {
  const nameValue = nameForm.getElementsByTagName("INPUT")[0].value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  return nameIsValid;
}

function emailVerifier(email) {
  const emailValue = email.getElementsByTagName("INPUT")[1].value;
  console.log("emailvalue is :" + `"${emailValue}"`);
  const emailIsValid = /[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  return emailIsValid;
}

function cardNumberVerifier(creditCardNumber) {
  const creditCardNumberValue = creditCardNumber.getElementsByTagName(
    "INPUT"
  )[10].value;
  console.log(creditCardNumberValue);
  // console.log('cc: ' + creditCardNumberValue);
  const creditCardNumberIsValid = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/.test(
    creditCardNumberValue
  );
  console.log(creditCardNumberIsValid);
  return creditCardNumberIsValid;
}

function zipVerifier(creditCardZip) {
  const creditCardZipValue = creditCardZip.getElementsByTagName("INPUT")[11]
    .value;
  console.log(creditCardZipValue);
  const zipNumberIsValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(creditCardZipValue);
  console.log("zc: " + zipNumberIsValid);
  return zipNumberIsValid;
}

function CvvVerifier(creditCardCvv) {
  const creditCardCvvValue = creditCardCvv.getElementsByTagName("INPUT")[12]
    .value;
  console.log("cvv value is: " + creditCardCvvValue);
  const CvvNumberIsValid = /^[0-9]{3,4}$/.test(creditCardCvvValue);
  console.log("cvv: " + CvvNumberIsValid);
  return CvvNumberIsValid;
}

function validationPass(element) {
  element.parentElement.classList.add('valid');
  element.parentElement.classList.remove('not-valid');
  element.parentElement.lastElementChild.display = 'none';
 }

 function validationFail(element){
   element.parentElement.classList.add('not-valid');
   element.parentElement.classList.remove('valid');
   element.parentElement.lastElementChild.visibility = 'visible';
 }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name_Is_Valid = nameVerifier(e.target);
  if (name_Is_Valid != true) {
    console.log("Not Valid");
    e.preventDefault();
  } else {
    console.log("Valid!");
    e.preventDefault();
  }

  e.preventDefault();
  let email_Is_Valid = emailVerifier(e.target);
  console.log("email is: " + email_Is_Valid);
  if (email_Is_Valid != true) {
    console.log("Not Valid!");
    e.preventDefault();
  } else {
    console.log("Valid!");
    e.preventDefault();
  }

  e.preventDefault();
  let creditCardNumber_Is_Valid = cardNumberVerifier(e.target);
  const clicked3 = document.querySelector("#cc-num");
  const hightlightedCcNumber = clicked3.parentElement;
  if (creditCardNumber_Is_Valid != true) {
     validationFail(hightlightedCcNumber);
    e.preventDefault();
    } else {
    validationPass(hightlightedCcNumber);
    e.preventDefault();
  }
  
  e.preventDefault();
  let creditCardZip_Is_Valid = zipVerifier(e.target);
  const clicked4 = document.querySelector("#zip");
    const hightlightedZip = clicked4.parentElement;
  if (creditCardZip_Is_Valid != true) {
     validationFail(hightlightedZip);
    e.preventDefault();
    } else {
    validationPass(hightlightedZip);
    e.preventDefault();
  }

  e.preventDefault();
  let creditCardCvv_Is_Valid = CvvVerifier(e.target);
    const clicked5 = document.querySelector("#cvv");
    const hightlightedCvv = clicked5.parentElement;
  if (creditCardCvv_Is_Valid != true) {
     validationFail(hightlightedCvv);
    e.preventDefault();
    } else {
    validationPass(hightlightedCvv);
    e.preventDefault();
  }
});
