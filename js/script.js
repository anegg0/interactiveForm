/* Variable to store form inputs -  */
const nameElement = document.querySelector("#name");
nameElement.focus();

// const jobRole = document.querySelector("#payment");

const jobOther = document.querySelector("#other-job-role");
jobOther.style.display = "none";
const selectorJobs = document.querySelector("#title");
const allJobs = document.querySelectorAll("#job");

selectorJobs.addEventListener("change", (e) => {
  if (e.target.value == "other") {
    jobOther.style.display = "block";
  }
});

let selectorDesigns = document.querySelector("#design");
const selectorColor = document.querySelector("#color");
const colors = selectorColor.children;
const colorDiv = document.querySelector("#shirt-colors");
colorDiv.style.display = "none";

selectorDesigns.addEventListener("change", (e) => {
  const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
  const heartJS = document.querySelectorAll('[data-theme="heart js"]');

  if (e.target.value == "js puns") {
    for (let i = 0; i < jsPuns.length; i++) {
      colorDiv.style.display = "block";
      jsPuns[i].style.display = "block";
      heartJS[i].style.display = "none";
    }
  } else if (e.target.value == "heart js") {
    for (let i = 0; i < heartJS.length; i++) {
      colorDiv.style.display = "block";
      heartJS[i].style.display = "block";
      jsPuns[i].style.display = "none";
    }
  }
});

/* This listener will evaluates the data-day-and-time of ticked checkboxes and disable checkboxes that 
match concurrent time slots
*/
const registerActivities = document.querySelector("#activities");
registerActivities.addEventListener("click", (e) => {
  const clicked = e.target;
  const clickedTypeTime = clicked.getAttribute("data-day-and-time");
  const activities = registerActivities.getElementsByTagName("label");
  for (let i = 0; i < activities.length; i++) {
    if (
      activities[i].children[2].innerHTML === clickedTypeTime &&
      activities[i].children[0] !== clicked
    ) {
      activities[i].children[0].disabled = true;
      activities[i].children[0].parentElement.classList.add("disabled");
    }
    if (
      activities[i].children[2].innerHTML === clickedTypeTime &&
      !clicked.checked
    ) {
      activities[i].children[0].disabled = false;
      activities[i].children[0].parentElement.classList.remove("disabled");
    }
  }
});

//These listeners will enable enhanced visibility on the selected elements

const fieldset = document.querySelector("#activities");
const checkbox = document.querySelectorAll('[type="checkbox"]');
console.log("checkbox length is: " + checkbox[1]);
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("blur", (e) => {
    checkbox[i].parentElement.classList.remove("focus");
    console.log('bleure autant que voudras, je ne reviendrai pas')
  });

  checkbox[i].addEventListener("focus", (e) => {
    checkbox[i].parentElement.classList.add("focus");
  });
}
// This listener evaluates the added cost of selected activities

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

// this part hides/shows payment method fields details depending on the payment mode selected

const payment = document.querySelector("#payment");

const paypal = document.querySelector(".paypal");
const bitcoin = document.querySelector(".bitcoin");
const creditCardExpirationBox = document.querySelector(".expiration-box");
const creditCardBox = document.querySelector(".credit-card-box");
paypal.style.display = "none";
bitcoin.style.display = "none";

payment.addEventListener("change", (e) => {
  const clicked = e.target.value;
  if (clicked == "paypal") {
    paypal.style.display = "block";
    bitcoin.style.display = "none";
    creditCardBox.style.display = "none";
    creditCardExpirationBox.style.display = "none";
  } else if (clicked == "bitcoin") {
    bitcoin.style.display = "block";
    paypal.style.display = "none";
    creditCardBox.style.display = "none";
    creditCardExpirationBox.style.display = "none";
  } else if (clicked == "credit-card") {
    creditCardBox.style.display = "block";
    creditCardExpirationBox.style.display = "block";
    paypal.style.display = "none";
    bitcoin.style.display = "none";
  }
});

// This part processes form validation

const form = document.querySelector("form");
const nameForm = document.querySelector("#name");
const email = document.querySelector("#email");
const creditCardNumber = document.querySelector("#cc-num");
const creditCardZip = document.querySelector("#zip");
const creditCardCvv = document.querySelector("#cvv");
const activitiesBox = document.querySelector("#activities-box");

function nameVerifier(nameForm) {
  const nameValue = nameForm.getElementsByTagName("INPUT")[0].value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  return nameIsValid;
}

function emailVerifier(email) {
  const emailValue = email.getElementsByTagName("INPUT")[1].value;
  const emailIsValid = /[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  return emailIsValid;
}

function cardNumberVerifier(creditCardNumber) {
  const creditCardNumberValue = creditCardNumber.getElementsByTagName(
    "INPUT"
  )[10].value;
  const creditCardNumberIsValid = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/.test(
    creditCardNumberValue
  );
  return creditCardNumberIsValid;
}

function zipVerifier(creditCardZip) {
  const creditCardZipValue = creditCardZip.getElementsByTagName("INPUT")[11]
    .value;
  const zipNumberIsValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(creditCardZipValue);
  return zipNumberIsValid;
}

function CvvVerifier(creditCardCvv) {
  const creditCardCvvValue = creditCardCvv.getElementsByTagName("INPUT")[12]
    .value;
  const CvvNumberIsValid = /^[0-9]{3,4}$/.test(creditCardCvvValue);
  return CvvNumberIsValid;
}

function activitiesVerifier(activitiesBox) {
  const activityValue = activitiesBox.querySelector('[type="checkbox"]').value;
  console.log(activityValue);
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
}

function validationPass(element) {
  element.classList.add("valid");
  element.classList.remove("not-valid");
  element.lastElementChild.style.visibility = "hidden";
}

function validationFail(element) {
  element.classList.add("not-valid");
  element.classList.remove("valid");
  element.lastElementChild.style.visibility = "visible";
}

form.addEventListener("submit", (e) => {
  let name_Is_Valid = nameVerifier(e.target);
  const clicked1 = document.querySelector("#name");
  const hightlightedName = clicked1.parentElement;
  if (name_Is_Valid != true) {
    validationFail(hightlightedName);
    e.preventDefault();
  } else {
    validationPass(hightlightedName);
  }

  let email_Is_Valid = emailVerifier(e.target);
  const clicked2 = document.querySelector("#email");
  const hightlightedEmail = clicked2.parentElement;
  if (email_Is_Valid != true) {
    validationFail(hightlightedEmail);
    e.preventDefault();
  } else {
    validationPass(hightlightedEmail);
  }

  let creditCardNumber_Is_Valid = cardNumberVerifier(e.target);
  const clicked3 = document.querySelector("#cc-num");
  const hightlightedCcNumber = clicked3.parentElement;
  if (creditCardNumber_Is_Valid != true) {
    validationFail(hightlightedCcNumber);
    e.preventDefault();
    clicked3.parentElement.classList.add();
  } else {
    validationPass(hightlightedCcNumber);
  }

// wip --------------------------------

  let creditCardZip_Is_Valid = zipVerifier(e.target);
  const clicked4 = document.querySelector("#zip");
  const hightlightedZip = clicked4.parentElement;
  if (creditCardZip_Is_Valid != true) {
    validationFail(hightlightedZip);
  console.log('element is: ' + hightlightedZip)
    e.preventDefault();
  } else {
    validationPass(hightlightedZip);
  }

  let creditCardCvv_Is_Valid = CvvVerifier(e.target);
  const clicked5 = document.querySelector("#cvv");
  const hightlightedCvv = clicked5.parentElement;
  if (creditCardCvv_Is_Valid != true) {
    validationFail(hightlightedCvv);
    e.preventDefault();
  } else {
    validationPass(hightlightedCvv);
  }

  const checkboxes = activitiesBox.querySelectorAll('[type="checkbox"]');
  let totalActivitiesChecked = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      totalActivitiesChecked += 1;
      console.log(totalActivitiesChecked);
    }
  }
  if (totalActivitiesChecked === 0) {
    e.preventDefault();
  }
});
