'use strict';

const startGame = function() {
   let hiddenNumber = Math.floor(Math.random() * 101);

   const gameBot = function () {
      let userNumber = prompt("Угадай число от 1 до 100");

      if(userNumber === null) {
         alert('Игра окончена');
      } else if(isNaN(userNumber) || userNumber.trim() === '') {
         alert('Введи число!');
         gameBot();
      } else if(userNumber < hiddenNumber) {
         alert('Загаданное число меньше');
         gameBot();
      } else if (userNumber > hiddenNumber) {
         alert('Загаданное число больше');
         gameBot();
      } else {
            alert('Поздравляю, Вы угадали!!!');
      }
   };

   return gameBot();
};

startGame();