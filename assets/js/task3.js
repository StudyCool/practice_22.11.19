'use strict';

/*
Task 3
*/

// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.


const arr1 = [0,5,6,2,3,3,3,2,83,1,14];
const arr2 = [4,5,83,1,8,4];
console.log(arr1);
console.log(arr2);
console.log("объединенный массив без повторений:")
console.log(unitedArr(arr1, arr2));
console.log("------------------------");
function unitedArr(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    let arr = [arr3[0]];
    for (let i = 1; i < arr3.length; i++) {
        if (arr3[i] != arr3[i-1]) {
            arr.push(arr3[i]);
        }
    }
    return arr;
}

//Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются
// и в первом и во втором массивах) без повторений.

const arrFirst = [0,3,6,14,28,3,0,1,22,2,2,1];
const arrSecond = [3,4,5,6,8,9,10,11,12,17,9];
console.log(arrFirst);
console.log(arrSecond);
console.log(getAllUniqElements(arrFirst, arrSecond));

function getAllUniqElements(arrFirst, arrSecond) {
    let arr3 = [];
    for(let i = 0; i < arrFirst.length; i++) {
        for(let j = 0; j < arrSecond.length; j++) {
            if (arrFirst[i] === arrSecond[j]) {
                arr3.push(arrFirst[i]);
            }
        }
    }
    return arr3;
}

/*
3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.
*/
const myArr = [1,5,6,8,9];
const extract = [2,6,5,3];
console.log(myArr);
console.log(extract);
console.log(newUniqValues(myArr, extract));

    function newUniqValues(arr, values) {
    return arr.filter(
        currentElem => !values.includes(currentElem)
    )
}

console.log("------------------------");