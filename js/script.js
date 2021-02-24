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
const selectorDesigns = document.querySelector('#design')
const selectorColor = document.querySelector('#color')
selectorColor.style.visibility = 'hidden';
const colorDiv = document.querySelector('#shirt-colors')

selectorJobs.addEventListener('change', e => {
console.log(e.target.value)

if (e.target.value == 'other') {
jobOther.style.visibility = 'visible';
}
})

selectorDesigns.addEventListener('change', e => {
console.log(e.target.value)

if (e.target.value !== 'js puns')
selectorColor.style.visibility = 'visible';
}
)