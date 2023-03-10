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


// -------------------------------- 5 ----------------------------------

// Представим автобус, забирающий и высаживающий людей на каждой остановке.
// Дан массив массивов, первый элемент которых равен числу пассажиров,
// вошедших в автобус на остановке, а второй - числу пассажиров,
// вышедших на остановке.
//
// Ваша Задача написать функцию, которая возвращает число людей,
// оставшихся в автобусе после последней остановки (массива).
// Хоть это и последняя остановка,
// в автобусе все еще находятся люди (они, наверное, уснули :D ).
//
// Помните, что число оставшихся людей в автобусе всегда >= 0
// Значение второго числа первого элемента массива = 0,
// потому что автобус пустой на первой остановке.
//
// Например:
// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17

// const busStops = (arr) => {
//   let pasIn = 0, pasOut = 0;
//
//   arr.forEach(item => {
//     pasIn += item[0];
//     pasOut += item[1];
//   });
//
//   return pasIn - pasOut;
// }
//
// console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));


// -------------------------------- 6 ----------------------------------

// Даны две строки, которые содержат только буквы от a - z.
// Ваша задача написать функцию, которая возвращает
// новую отсортированную (по порядку) строку,
// которая содержит буквы двух строк, повторяющихся только один раз.
//
// Например:
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

// function sortMyString(arg) {
//   return [...(new Set(arg))].sort();
// }
//
// const longest = (str1, str2) => {
//   let result = [...sortMyString(str1), ...sortMyString(str2)];
//   console.log()
//   return [...(new Set(result))].sort().join('');
// }
//
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));


// -------------------------------- 7 ----------------------------------

// Ваша задача написать функцию, которая принимает
// в качестве параметра целое число и возводит в квадрат каждую цифру числа.
// Результат также необходимо вернуть в виде целого числа.
//
// Например:
// squareDigits(9119) --> 811181

// const squareDigits = (num) => {
//   let result = '';
//
//   String(num).split('').forEach(item => result += item * item)
//
//   return +result;
// }
//
// console.log(squareDigits(9119));


// -------------------------------- 8 ----------------------------------

// Для того, чтобы обеспечить безопасность данных при оплате онлайн,
// нам необходимо замаскировать все цифры банковского счета, кроме последних четырех.
//
// Ваша задача написать функцию, которая принимает в качестве
// параметра строку, состоящую из цифр, заменяет все элементы на '#',
// кроме последних четырех и возвращает ее.
//
// Например:
// maskify("4556364607935616") --> "############5616"

// const maskify = (str) => {
//   let num = str.slice(str.length - 4), result = '';
//
//   for(let i = 0; i < str.length - 4; i++) {
//     result += '#';
//   }
//   return result += num;
// }
//
// console.log(maskify("4556364607935616"));


// -------------------------------- 9 ----------------------------------

// Дан массив слов, необходимо определить,
// составлены ли все слова из одних и тех же символов.
//
// Например:
// ["кот", "ток", "кто"] --> true
// ["кот", "тк", "кТо"] --> false

// function mySort(arg){
//   return arg.split('').sort().join('');
// }
//
// const myArr = (arr) => {
//   let pl = mySort(arr[0]), markT = 0, markF = 0;
//
//   arr.forEach(item => {
//     pl === mySort(item) ? markT += 1 : markF += 1;
//   })
//   return markF ? false : true;
// }
//
// console.log(myArr(["кот", "ток", "кто"]))


// -------------------------------- 10 ----------------------------------
// TODO
// Напишите функцию, которая возвращает сумму таким образом:
//
// Например:
//   f(1)(2)(3) --> 6

// const foo = (a) => {
//     let currentSum = a;
//
//     function f(b) {
//       currentSum += b;
//       return f;
//     }
//
//     f.toString = function() {
//       return currentSum;
//     };
//
//     return f;
// }
//
// console.log(foo(1)(2)(3))


// -------------------------------- 11 ----------------------------------

// Напишите функцию, которая находит наиболее часто используемый элемент массива.
//
// Например:
// const array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]; --> "z"

function f11(arr) {
  let first = 0, second = 0;

}

// -------------------------------- 12 ----------------------------------


// Напишите функцию `expand(arr)`, которая разворачивает
// вложенный массив любой глубины.
//
// Например:
// const arr1 = [1, [2,[3,[4]]]]; --> [1,2,3,4];
// const arr2 = [1, [2], [3, [[4]]],[5,6]]; --> [1,2,3,4,5,6];

function f12(arr) {
  let count = 0, result = arr.flat(count);

  result.forEach(item => {
    if (typeof item === 'object') {
      count += 1;
    }
  })
  result = arr.flat(count);
  return result;
}

console.log(f12([1, [2, [3, [4]]]]))


// -------------------------------- 13 ----------------------------------

// Напишите функцию с двумя параметрами, которая создаёт массив элементов,
// представляющих собой сумму соответствующих элементов заданных массивов.
//
// Например:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6];
//
// func(array1,array2) // [5,7,9,4,5]

// const sumArr = (arr1, arr2) => {
//   let count = arr1.length > arr2.length ? arr1.length : arr2.length;
//   let result = [];
//
//   for (let i = 0; i < count; i++) {
//     if (arr1[i] && !arr2[i]) {
//       result.push(arr1[i] + 0)
//     } else if (arr1[i] && arr2[i]) {
//       result.push(arr1[i] + arr2[i])
//     }
//   }
//   return result;
// }
//
// console.log(sumArr(array1, array2));


// -------------------------------- 14 ----------------------------------

// Напишите функцию `removeDuplicates(arr)`, которая возвращает массив,
// в котором удалены повторяющиеся элементы из массива arr.
//
// Например:
// let arrR = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];
//
// removeDuplicates(arr); --> ["php","css","script","html","java"]

// const removeDuplicates = (arr) => {
//   // return arr.sort().filter((item, index) => item !== arr[index + 1] ? true : false);
//   return arr.filter((item, index) => item !== arr[index + 1] ? true : false);
// }
//
// console.log(removeDuplicates(arrR))


// -------------------------------- 15 ----------------------------------

// Напишите функцию colonOdd(num), которая принимает число num в
// качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
// Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7

// const colonOdd = (num) => {
//   let arrayC = String(num).split(''), result = [];
//
//   arrayC.map((item, index) => {
//
//     if (item % 2 !== 0 && arrayC[index + 1] % 2 !== 0 && index !== (arrayC.length - 1)) {
//       result.push(`${item}:`)
//     } else {
//       result.push(item);
//     }
//   });
//   return result.join('');
// }
//
// console.log(colonOdd(55639217));


// -------------------------------- 16 ----------------------------------

// Напишите функцию `copyArr(arr)`, которая копирует массив, не изменяя оригинал.
// Например:
// const vegetables = ['Капуста', 'Репа', 'Редиска'];
//
// const copyArr = (arr) => {
//   return arr.map(item => `${item}1`);
// }
//
// console.log(copyArr(vegetables))