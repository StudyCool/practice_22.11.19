'use strict';
/*
1.1 Посчитать факториал введенного пользователем числа.*/

/*Итеративно*/

/*
const x = Number(prompt('Input a number: '));
let i = 1;
let factorial = 1;
while (i < x){
    i++
    factorial = factorial * i;
}
console.log(factorial);

*/


/*Рекурсивно

let z = Number(prompt('Input a number: '));
let result = factorialR(z);
console.log(result);


function factorialR(n) {
   
    if (n < 2) {
        return 1;
    } else {
        return n * factorialR(n-1);
    }

}
console.log(factorialR(4));
*/

/* Задание 2

    Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.

*/

//let myarray=["3", "1", "2"];
//myarray.sort(); //  ["1", "2", "3"]
//myarray.reverse();

//проверить большее число
//1-я функция - вывод от меньшего к большему (от  8 до 2)
//2-я функция - вывод от большего к меньшему

let FirstBorderUserArray = Number(prompt('Input first value of a range: '));
let SecondBorderUserArray = Number(prompt('Input second value of a range: '));
let maxBorder;
let minBorder;

if (FirstBorderUserArray > SecondBorderUserArray) {
    maxBorder = FirstBorderUserArray;
    minBorder = SecondBorderUserArray;
} else {
    maxBorder = SecondBorderUserArray;
    minBorder = FirstBorderUserArray;
}


function rangeArrayUserFromMinToMax(to, from, arr = []) {

    if (from >= to) {

        arr.push(from);
        rangeArrayUserFromMinToMax(to, from -1, arr);
        return arr;
    }
}


function rangeArrayUserFromMaxToMin(from, to, arr = []) {

    if (to >= from) {

        arr.push(to);
        rangeArrayUserFromMaxToMin(from, to - 1, arr);
        return arr;
    }


}


/* Задание 3

function getNumberMirror(number) {

    if (number < 10) {
        return number;
    } else {
        const result = number % 10;
        const nextNumber = (number - result) / 10;
        const str = result + getNumberMirror(next
        Number
    ).
        toString();
        return Number(str);
    }
}


*/