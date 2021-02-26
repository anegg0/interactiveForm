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

const registerActivities = document.querySelector("#activities-box");

registerActivities.addEventListener("change", (e) => {
  const clicked = e.target;
  const clickedTypeTime = clicked.getAttribute("data-day-and-time");
  const activities = registerActivities.children;
  // console.log(activities[2].children[2].innerHTML);
  // console.log(activities[2].getAttribute('data-day-and-time'))
  for (let i = 0; i < activities.length; i++) {
    if (clickedTypeTime == activities[i].children[2].innerHTML) {
      console.log(clickedTypeTime);
      activities[i].children[0].disabled = "true";
    }
  }
});
