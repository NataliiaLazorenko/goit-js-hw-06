/* Масив об'єктів користувачів
 * filter, includes і map

 * Отримай масив імен всіх користувачів, у яких є друг з заданим іменем.
 
 * Використовуй деструктивне присвоювання для параметра функції {friends} і ({name}) без пробілів і
 * переносів на новий рядок

 * Використовуй тільки перебираючі методи масиву, які не змінюють (не мутують) вихідний масив.
 * Тобто, не можна використовувати for, splice, push і т.п. мутуючі методи.
 */
import users from './users.js';

// Write code under this line
// const getUsersWithFriend = (array, friendName) =>
//   array
//     .filter(function (user) {
//       return user.friends.includes(friendName);
//     })
//     .map(function (user) {
//       return user.name;
//     });

// без ДП
// const getUsersWithFriend = (array, friendName) =>
//   array
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);

// з ДП
const getUsersWithFriend = (array, friendName) =>
  array
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);
console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
