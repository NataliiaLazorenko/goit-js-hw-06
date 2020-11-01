/* Масив об'єктів користувачів
 * find

 * Отримай об'єкт користувача (не масив) по унікальному значенню властивості email.

 * Використовуй деструктивне присвоювання для параметра функції ({email}) без пробілів і
 * перенесення на новий рядок.
 
 * Використовуй тільки перебираючі методи масиву, які не змінюють (не мутують) вихідний масив.
 * Тобто, не можна використовувати for, splice, push і т.п. мутуючі методи.
 */
import users from './users.js';

// Write code under this line
// без ДП
// const getUserWithEmail = (array, mail) =>
//   array.find(user => user.email === mail);

// // з ДП
const getUserWithEmail = (array, mail) =>
  array.find(({ email }) => email === mail);
console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

/* {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
} */

console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */
