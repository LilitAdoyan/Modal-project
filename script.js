'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnColseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnColseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
