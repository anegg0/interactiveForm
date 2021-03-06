// /* Variable to store form inputs -  */
const nameElement = document.querySelector("#name");
nameElement.focus();

const jobOther = document.querySelector("#other-job-role");
jobOther.style.display = "none";
const selectorJobs = document.querySelector("#title");
const allJobs = document.querySelectorAll("#job");

selectorJobs.addEventListener("change", (e) => {
  if (e.target.value == "other") {
    jobOther.style.display = "block";
  } else {
    jobOther.style.display = "none";
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

  if (e.target.value === "js puns") {
    for (let i = 0; i < jsPuns.length; i++) {
      colorDiv.style.display = "block";
      jsPuns[i].hidden = false;
      heartJS[i].selected = false;
      heartJS[i].hidden = true;
    }
  } else if (e.target.value === "heart js") {
    for (let i = 0; i < heartJS.length; i++) {
      colorDiv.style.display = "block";
      heartJS[i].hidden = false;
      jsPuns[i].hidden = true;
      jsPuns[i].selected = false;
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

//These listeners will enable focus on the selected activities

const fieldset = document.querySelector("#activities");
const checkbox = document.querySelectorAll('[type="checkbox"]');
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("blur", (e) => {
    checkbox[i].parentElement.classList.remove("focus");
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

// this part hides/shows payment method fields details depending on the selected payment mode

const payment = document.querySelector("#payment");
const paypal = document.querySelector(".paypal");
const bitcoin = document.querySelector(".bitcoin");
const creditCardExpirationBox = document.querySelector(".expiration-box");
const creditCardBox = document.querySelector(".credit-card-box");
paypal.style.display = "none";
bitcoin.style.display = "none";
let chosenPaymentMethod;
payment.addEventListener("change", (e) => {
  const clicked = e.target.value;
  if (clicked == "paypal") {
    paypal.style.display = "block";
    bitcoin.style.display = "none";
    creditCardBox.style.display = "none";
    creditCardExpirationBox.style.display = "none";
    chosenPaymentMethod = "paypal";
    return chosenPaymentMethod;
  } else if (clicked == "bitcoin") {
    bitcoin.style.display = "block";
    paypal.style.display = "none";
    creditCardBox.style.display = "none";
    creditCardExpirationBox.style.display = "none";
    chosenPaymentMethod = "bitcoin";
    return chosenPaymentMethod;
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
const paymentMethod = document.querySelector("#payment");

function nameVerifier(nameForm) {
  const nameValue = nameForm.getElementsByTagName("INPUT")[0].value;
  const nameIsValid = /^.+$/.test(nameValue);
  return nameIsValid;
}

// the regex used to verify emails is fairly simple (it is case sensitive) but will check subdomains or
// "double suffixes" like co.uk
function emailVerifier(email) {
  const emailValue = email.getElementsByTagName("INPUT")[1].value;
  const emailIsValid = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(
    emailValue
  );
  return emailIsValid;
}

function cardNumberVerifier(creditCardNumber) {
  const creditCardNumberValue = creditCardNumber.getElementsByTagName(
    "INPUT"
  )[10].value;
  // const creditCardNumberIsValid = /(^(\d{13,16})?$)/.test(
  const creditCardNumberIsValid = /^[0-9]{13,16}$/.test(
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
  const CvvNumberIsValid = /^[0-9]{3}$/.test(creditCardCvvValue);
  return CvvNumberIsValid;
}

function validationPass(element) {
  element.classList.add("valid");
  element.classList.remove("not-valid");
  element.lastElementChild.style.display = "none";
}

function validationFail(element) {
  element.classList.add("not-valid");
  element.classList.remove("valid");
  element.lastElementChild.style.display = "block";
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

  const checkboxes = activitiesBox.querySelectorAll('[type="checkbox"]');
  let totalActivitiesChecked = 0;
  const hint = document.querySelector("#activities-hint");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      totalActivitiesChecked += 1;
    }
  }
  if (totalActivitiesChecked !== 0) {
    hint.parentElement.classList.remove("not-valid");
    hint.parentElement.classList.add("valid");
    hint.parentElement.lastElementChild.style.display = "none";
  } else if (totalActivitiesChecked == 0) {
    hint.parentElement.classList.add("not-valid");
    hint.parentElement.classList.remove("valid");
    hint.parentElement.lastElementChild.style.display = "inline";
    e.preventDefault();
  }

  if (payment.value == "credit-card") {
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

    let creditCardZip_Is_Valid = zipVerifier(e.target);
    const clicked4 = document.querySelector("#zip");
    const hightlightedZip = clicked4.parentElement;
    if (creditCardZip_Is_Valid != true) {
      validationFail(hightlightedZip);
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
  }
});
