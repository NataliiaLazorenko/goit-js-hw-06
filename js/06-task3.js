/* Масив об'єктів користувачів
 * filter, map
 * Отримай масив імен користувачів (значення властивості name) по статі (значення властивості gender).

 * Використовуй деструктивне присвоювання для параметра функції ({name}) без пробілів і
 * перенесення на новий рядок.
 
 * Використовуй тільки перебираючі методи масиву, які не змінюють (не мутують) вихідний масив.
 * Тобто, не можна використовувати for, splice, push і т.п. мутуючі методи.
 */
import users from './users.js';

// Write code under this line
// без ДП
// const getUsersWithGender = (array, gender) =>
//   array.filter(user => user.gender === gender).map(user => user.name);

// з ДП для параметра функції ({name})
// const getUsersWithGender = (array, gender) =>
//   array.filter(user => user.gender === gender).map(({ name }) => name);

// з ДП для обох параметрів функції ({name}, {gender})
const getUsersWithGender = (array, userGender) =>
  array.filter(({ gender }) => gender === userGender).map(({ name }) => name);
console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
