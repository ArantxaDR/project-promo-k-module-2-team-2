'use strict';

//Name//
const introName = document.querySelector('.js-intro-name');
const prevName = document.querySelector('.js-preview-name');

function putName(){
  prevName.innerHTML = introName.value;
  if (introName.value === ""){
    prevName.innerHTML = "Nombre Apellido";
  }
  if (introName.value.length>introName.maxLength) introName.value = introName.value.slice (0, introName.maxLength);
}

introName.addEventListener('keyup',putName);
//Job//
const introJob = document.querySelector('.js-intro-job');
const prevJob = document.querySelector('.js-preview-job');

function putJob(){
  prevJob.innerHTML = introJob.value;
  if (introJob.value === ""){
    prevJob.innerHTML = "Front-end developer";
  }
  // if (introJob.value.length>introJob.maxLength) introJob.value = introJob.value.slice (0, introJob.maxLength);
}

introJob.addEventListener('keyup',putJob);

//Phone//
const introPhone = document.querySelector('.js-intro-phone');
const prevPhone = document.querySelector('.js-preview-phone');

function putPhone(){
  prevPhone.href = 'tel:'+introPhone.value;
}

introPhone.addEventListener('keyup',putPhone);

//Mail//
const intMail = document.querySelector('.js-intro-mail');
const preMail = document.querySelector('.js-preview-mail');

function puMail(){
  preMail.href = 'mailto:' + intMail.value;
}

intMail.addEventListener('keyup',puMail);

//Linkedin//
const introLinkedin = document.querySelector('.js-intro-linkedin');
const prevLinkedin = document.querySelector('.js-preview-linkedin');

function putLinkedin(){
  prevLinkedin.href = introLinkedin.value;
}

introLinkedin.addEventListener('keyup',putLinkedin);

//Github//
const introGithub = document.querySelector('.js-intro-github');
const prevGithub =  document.querySelector('.js-preview-github');

function putGithub(){
  prevGithub.href = 'https://github.com/' + introGithub.value;
}

introGithub.addEventListener('keyup',putGithub);

