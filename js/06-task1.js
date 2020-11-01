/* Масив об'єктів користувачів
 * map
 
 * Отримати масив імен всіх користувачів (властивість name), використовуючи деструктивне присвоювання
 * для параметра функції ({name}) без пробілів і переносів на новий рядок.
 
 * Використовуй тільки перебираючі методи масиву, які не змінюють (не мутують) вихідний масив.
 * Тобто, не можна використовувати for, splice, push і т.п. мутуючі методи.

 * ===================================================================================================
 * Деструктивне приствоювання (ДП) для параметра функції:
 * 1. Об'єкт як параметр без ДП
   // const object = {num : 2}
   // function getNum (obj) { return obj.num; }
   // console.log(getNum(object)) // 2
 * 2. ДП
   // const object = {num : 2}
   // // const num  =  object.num;
   // const { num } = object;
   // console.log(num) // 2
 * 3. об'єкт як параметр з ДП
   // const object = {num : 2}
   // //function getNum (obj) { return obj.num; }
   // function getNum ({num}) { return num; }
   // console.log(getNum(object)) // 2
 * ===================================================================================================
 */
import users from './users.js';

// Write code under this line
// const getUserNames = users.map(function (user) {
//   return user.name;
// });

// const getUserNames = users.map(user => user.name);
// console.log(getUserNames);

// об'єкт як параметр функції без ДП
// const getUserNames = array => array.map(user => user.name);

// об'єкт як параметр функції з ДП
// const getUserNames = array =>
//   array.map(function ({ name }) {
//     return name;
//   });

const getUserNames = array => array.map(({ name }) => name);
console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
// console.log(numbers.map(user => user.name));
// console.log(
//   numbers.map(user => ({
//     id: user.id,
//     name: user.name,
//   })),
// );
// console.log(numbers.map(user => ({id: user.id, name: user.name})));

// з використанням деструктуризації
// console.log(numbers.map(({ id, name }) => ({ id, name })));
