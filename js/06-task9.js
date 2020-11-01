/* Масив об'єктів користувачів
 * sort і map
 
 * Отримай масив імен (поле name) людей, відсортований у залежності
 * від кількості їхніх друзів (поле friends)

 * Уникаємо мутації вихідного масиву: так як метод sort змінює (мутує) вихідний масив,
 * то потрібно зробити копію масиву і сортувати уже копію, а не вихідний масив.

 * ===================================================================================================
 * Копіювання масиву:
   const arr = [1, 3, 5];

   // 1
   const first = [...arr];

   // 2
   const second = arr.slice();

   // 3
   const third = arr.concat();
 * ===================================================================================================
 * Використовуй деструктивне присвоювання для параметра функції ({name}) без пробілів і
 * перенесення на новий рядок
 
 * Використовуй тільки перебираючі методи масиву, які не змінюють (не мутують) вихідний масив.
 * Тобто, не можна використовувати for, splice, push і т.п. мутуючі методи.
 */
import users from './users.js';

// Write code under this line
// const getNamesSortedByFriendsCount = array =>
//   [...array]
//     .sort(function (prev, next) {
//       return prev.friends.length - next.friends.length;
//     })
//     .map(function (user) {
//       return user.name;
//     });

// без ДП
// const getNamesSortedByFriendsCount = array =>
//   [...array]
//     .sort((prev, next) => prev.friends.length - next.friends.length)
//     .map(user => user.name);

// з ДП
const getNamesSortedByFriendsCount = array =>
  [...array]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
