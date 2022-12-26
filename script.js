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