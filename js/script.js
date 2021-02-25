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
jobOther.style.visibility = 'hidden';
const selectorJobs = document.querySelector("#title")
const allJobs = document.querySelectorAll('#job')
let selectorDesigns = document.querySelector('#design')
const selectorColor = document.querySelector('#color')
const colors = selectorColor.children;
console.log(colors);
const colorDiv = document.querySelector('#shirt-colors')
colorDiv.style.visibility = 'hidden';

selectorJobs.addEventListener('change', e => {

if (e.target.value == 'other') {
jobOther.style.visibility = 'visible';
}
})

selectorDesigns.addEventListener('change', e => {
  const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
  const heartJS = document.querySelectorAll('[data-theme="heart js"]');

 if (e.target.value == "js puns"){
        
for (let i = 0; i < jsPuns.length; i++) {

colorDiv.style.visibility = 'visible'
 jsPuns[i].style.visibility = 'visible';
 heartJS[i].style.visibility = 'hidden';
//  console.log(jsPuns[i].value)
 console.log(jsPuns.length)


    }
// console.log(e.target.value);
// console.log(selectorColor.length)

    } else {

for (let i = 0; i < heartJS.length; i++) {

colorDiv.style.visibility = 'visible'
 heartJS[i].style.visibility = 'visible';
 jsPuns[i].style.visibility = 'hidden';
 console.log(heartJS[i].value)
}    
}
}
)