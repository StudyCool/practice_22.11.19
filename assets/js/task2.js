'use strict;'
//Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log = (getRandomInt(10));