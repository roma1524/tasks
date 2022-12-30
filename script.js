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


// -------------------------------- 3 ----------------------------------

//   Вы, наверное, знаете систему «лайков» по Facebook и другим страницам.
//   Люди могут "лайкать" сообщения в блогах,изображения или другие предметы.
//   Мы хотим создать текст, который должен отображаться рядом с таким элементом.
//   Реализуйте функцию likes :: [String] -> String, которая
//   должна принимать входной массив, содержащий имена людей,которым нравится элемент.
//   Он должен возвращать отображаемый текст, как показано в примерах:
//
//   Например:
//       likes([]) --> 'no one likes this'
//       likes(['Peter']) --> 'Peter likes this'
//       likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
//       likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
//       likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'

// const likes = (arr) => {
//   let result = '';
//
//   if (arr.length === 1) {
//     result += arr[0] + ' likes this';
//   } else if (arr.length === 2) {
//     result = `${arr[0]} and ${arr[1]} likes this`;
//   } else if(arr.length === 3) {
//     let last = arr.pop();
//
//     arr.forEach((item, i) => {
//       if (arr.length === (i + 1)) {
//         result += item;
//       } else {
//         result += `${item}, `;
//       }
//     })
//
//     result += ` and ${last} likes this`;
//
//   } else if (arr.length > 3) {
//     result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   } else {
//     result += 'no one likes this';
//   }
//
//   return result;
// }
//
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


// -------------------------------- 4 ----------------------------------

// Что такое анаграмма?
//
// Два слова являются анаграммами между собой,если
// они оба содержат одинаковые буквы.
//
// Например: 'abba' & 'baab' == true
//
// Напишите функцию, которая находит все анаграммы слова из списка.
// В качестве параметра даны слово и массив слов.
// Функция должна возвращать массив всех анаграмм или пустой массив,
// если анаграмм не обнаружено.
//
// Например:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa'];


// function sortMyWord(arg) {
//   return arg.split('').sort().join('');
// }
//
// const anagrams = (word, arr) => {
//   let mainWord = sortMyWord(word), result = [];
//
//   arr.forEach(item => {
//     if (sortMyWord(item) === mainWord) {
//       result.push(item);
//     }
//   });
//
//   return result;
// }
//
// console.log(anagrams('az', ['av', 'za', 'zd', 'rz', 'az', 'aza']));



