'use strict;'

//2.1 Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.
// Функция принимает массив и выводит его на экран.
let arrRandom = new Array();
  for (let i = 0; i < 10; i++ ) {
  arrRandom[i] = Math.floor(Math.random() * Math.floor(10));
}


function printArray(arr) {
  console.log('Array of 10 random numbers:');
  for (let i = 0; i < arr.length; i++ ) {
   console.log(arr[i]);
}
}

printArray(arrRandom);

console.log('---------------------');

// Функция принимает массив и выводит только четные элементы.
function printEvenArray(arr) {
  console.log('Only even: ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

printEvenArray(arrRandom);

console.log('---------------------');

// Функция принимает массив и возвращает сумму всех элементов массива.

function sumArrayItem(arr){
let i = 0;
let sum = 0;
  arr.forEach(function(item, i , arr) {
   return sum = sum + item;
  });
  console.log("Sum elements of array: "+ sum);
}

sumArrayItem(arrRandom);
console.log('---------------------');

//Функция принимает массив и возвращает его максимальный элемент.

function findMaxArrayItem(arr){

  let max= arr[0];
  arr.forEach(function(item, i , arr) {
    if (max < item) {
      max = item;
    }

  });
  console.log("Max element of array: " + max);
}

findMaxArrayItem(arrRandom);
console.log('---------------------');
//Функция добавления нового элемента в массив по указанному индексу.

function addItemToPosition(arr, position, item) {
  arr.splice(position, 0, item);
  console.log('Was added "' + item + '" into array[' +  position + "] :" );
  console.log(arr);
}

addItemToPosition(arrRandom, 6, 9999);
console.log('---------------------');

function deleteItem(arr, index){
  arr.splice(index, 1);
  console.log("There was delete arr [" + index +"]");
  console.log(arr);
}
deleteItem(arrRandom, 6);