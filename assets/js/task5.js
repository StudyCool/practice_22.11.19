'use strict';
/*1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
одинаковой длины.*/

let hello = "Hello People!";
let greeting = "Good to see you!";

console.log(whoBigger(hello, greeting));

function whoBigger (str1, str2){
    if  (str1.length > str2.length) {
     return 1;
    } if (str2.length > str1.length) {
        return -1;
    } else  {return 0}
}

// Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
let hello1 = "hello People!";

function firstCharStrToUp (str){

    let cutChar = str.charAt(0);
    let upChar = cutChar.toUpperCase();
    console.log(upChar);
}

firstCharStrToUp(hello1);

//Написать функцию, которая считает количество гласных букв в переданной строке.
let myStr = "Don`t worry, be happy!";


function findVowels(str) {
    const reg = /[aeiouy]/gi;
    let found = str.match(reg);
    if (found === null) {
        return 0;
    }
return found.length;
}
console.log(findVowels(myStr));

//Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам.
// Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру.

const spamStr = "Внимание, внимание! Только сегодня! Купите билетов пачку и получите водокачку!"

function checkSpam (str){
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('100% бесплатно') || lowerStr.includes('увеличение продаж') || lowerStr.includes('только сегодня') || lowerStr.includes('не удаляйте') || lowerStr.includes('xxx');
}

console.log(checkSpam (spamStr));

// Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину.
// Если длина строки больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие.

const longStr = "It is a very long and boring string, so I desided to cut it";

function cutString(str) {
    const maxLength = 30;
    const strReplacement = "...";
    if (str.length > maxLength){

        return str.slice(0, maxLength-3) + strReplacement;
    }
    return str;
}
console.log(cutString (longStr));

/*
5.
    Например: truncate(“Hello, world!”, 8) должна вернуть
“Hello...”.

6. Написать функцию, которая проверяет, является ли пере-
данная строка палиндромом.

7. Написать функцию, которая считает количество слов в
предложении.

8. Написать функцию, которая возвращает самое длинное
слово из предложения.

9. Написать функцию, которая считает среднюю длину слова
в предложении.

10. Написать функцию, которая принимает строку и символ
и выводит индексы, по которым находится этот символ в
строке. Также вывести, сколько всего раз встречается этот
символ в строке.*/
