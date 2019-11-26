'use strict';


//*********************************************************************************************************************************************************** 


/* 1.1 Посчитать факториал введенного пользователем числа.


/*Итеративно


const x = Number(prompt('Input a number: '));
let i = 1;
let factorial = 1;
while (i < x){
    i++
    factorial = factorial * i;
}
console.log(factorial);

-----------------------------------------------------------------------------
Рекурсивно

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


//*********************************************************************************************************************************************************** 


 /* 2.1 Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.

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

//*********************************************************************************************************************************************************** 


/* 3.1 Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321.

function getNumberMirror(number) {

    if (number < 10) {
        return number;
    } else {
        const result = number % 10;
        const nextNumber = (number - result) / 10;
        const str = result + getNumberMirror(nextNumber);
        toString();
        return Number(str);
    }
}


*/


//*********************************************************************************************************************************************************** 

/*4.1 Написать функцию, которая считает сумму цифр числа. Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.



let number = Number(12345);
let sum=0;

getNumberInnerSum(number, sum);

function getNumberInnerSum(number, sum) {

    let result = number % 10;
	sum = sum + result;

		
		if (number > 10){
			
			let nextNumber = (number - result) / 10;
			getNumberInnerSum(nextNumber, sum);		
				
		} else
			{
				console.log("sum = " + sum);
			
			}

}
*/


//*********************************************************************************************************************************************************** 

/*5. Написать функцию, которая принимает число и выводит соответствующее количество вложенных пар круглых скобок. Например: число 4 – (((()))).

let bracketNumber = 8;

bracketConstructor(bracketNumber);

function bracketConstructor(bracketNumber){
	
	if (bracketNumber > 0) {
		
		console.log("(");
		bracketConstructor(bracketNumber-1);
		console.log(")");
	}
			
}
*/