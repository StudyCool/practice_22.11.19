'use strict';

//Создать массив фруктов и отсортировать его по алфавиту.
let arrFruits = ["apples", "grape", "plums", "apricots", "pears" ];
arrFruits.sort();

function printArrayToList(arr) {
    document.write('<ul>');
    for (let i = 0; i < arrFruits.length; i++) {
        document.write("<li>" + arrFruits[i] + "</li>");
    }
    document.write('</ul>');
}

printArrayToList(arrFruits);


//  Поиск фрукта в массиве.
//  Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден.
// Поиск должен быть нерегистрозависимым (regexp -i).

let reg = /grape/i;
let result=-1;
for (let i = 0; i < arrFruits.length; i++) {

    if(reg.test(arrFruits[i])) {
        result = i;
        break
        }
}
document.write(result);
