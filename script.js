'use strict';

// -------------------------------- 1 ----------------------------------

//   Напишите функцию, которая принимает массив и переносит все 0 в конец,
//   не изменяя порядок остальных элементов массива.
//
//   Например:
//   moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]

// const moveZeros = (arr) => {
//   let zero = [], other = [], result;
//
//   arr.forEach(el => el === 0 ? zero.push(el) : other.push(el));
//   result = [...other, ...zero];
//
//   return result;
// }
//
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));


// -------------------------------- 2 ----------------------------------

// Найдите недостающую букву.
// Напишите функцию,  которая принимает в качестве параметра массив букв,
// расположенных по алфавиту и возвращает массив с недостающей буквой.
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.
//
// Например:
// findMissingLetter(['a','b','c','d','f']) --> 'e'

// const findMissingLetter = (arr) => {
//   let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//
//   return arr_en.find((el, i) => (el !== arr[i]));
// }
//
// console.log(findMissingLetter(['a','b','c','d','f']))