'use strict';

const startGame = function() {
   let hiddenNumber = Math.floor(Math.random() * 101);

   const gameBot = function () {
      let userNumber = prompt("Угадай число от 1 до 100");

      if(userNumber === null) {
         alert('Игра окончена');
      } 
      if(isNaN(userNumber) || userNumber.trim() === '') {
         alert('Введи число!');
         gameBot();
      }
      if(userNumber < hiddenNumber) {
         alert('Загаданное число больше');
         gameBot();
      }
      if (userNumber > hiddenNumber) {
         alert('Загаданное число меньше');
         gameBot();
      } 
      if (userNumber == hiddenNumber) {
         alert('Поздравляю, Вы угадали!!!');
      }
   };

   console.log(hiddenNumber);
   return gameBot();
};

startGame();