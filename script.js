'use strict';

const countdown = new Date("2024-05-01T00:00:00Z").getTime(); 

const x = setInterval(function() {

  const now = new Date().getTime(); 

  const distance = countdown - now; 

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Отображаем оставшееся время в элементах таймера
  document.querySelector('.days').innerHTML = days < 10 ? "0" + days : days;
  document.querySelector('.hours').innerHTML = hours < 10 ? "0" + hours : hours;
  document.querySelector('.minutes').innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.querySelector('.seconds').innerHTML = seconds < 10 ? "0" + seconds : seconds;

  // Если таймер закончился, выводим сообщение
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.timer').innerHTML = "EXPIRED";
  }
}, 1000);
