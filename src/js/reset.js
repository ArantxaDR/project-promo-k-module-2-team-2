/* eslint-disable no-unused-vars */
'use strict';

//el value de input en el elemento de nombre
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector ('.js-input-job');
const dataName = inputName.value;
const name = document.querySelector ('.js-name');
name.innerHTML = dataName;


//crear variables con los elementos del listener y los que queremos cambiar en la tarjeta,
const input = document.querySelector('.js-input-name');
const reset = document.querySelector ('.js-reset');
const job = document.querySelector ('.js-job');

// //crear objeto y propiedades
const resetButton1 = {};
resetButton1.name = 'Nombre Apellido';
resetButton1.job = 'Front-end developer';

//funcion para que aparezca el value en el name
function changeInput (){
  return name.innerHTML = inputName;
}


// //funcion a cada propiedad
function changeName (){
  return name.innerHTML =  resetButton1.name;
}



// function changeJob (){
//   return job.innerHTML = resetButton1.job;
// }

// //evento sobre el botón.
// name.addEventListener('keyup',changeInput);
reset.addEventListener ('click',changeName);
// reset.addEventListener ('click',changeJob);
