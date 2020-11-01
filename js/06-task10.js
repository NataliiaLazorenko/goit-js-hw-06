/* Масив об'єктів користувачів
 * reduce, filter, sort
 
 * Отримай масив всіх вмінь всіх користувачів (поле skills), при цьому не повинно бути вмінь,
 * які повторюються і вони повинні бути відсортовані в алфавітному порядку.
 
 * ===================================================================================================
 * Злиття масивів:
   const odd = [1, 3, 5];
   const even = [2, 4, 6];

   // 1
   [...odd, ...even];
   //  [1, 3, 5, 2, 4, 6]

   // 2
   odd.concat(even)
   //  [1, 3, 5, 2, 4, 6]
 * ===================================================================================================

 * Використовуй тільки перебираючі методи масиву, які не змінюють (не мутують) вихідний масив.
 * Тобто, не можна використовувати for, splice, push і т.п. мутуючі методи.
 */
import users from './users.js';

// Write code under this line
// const getSortedUniqueSkills = array =>
//   array.reduce(function (allSkills, user) {
//     allSkills.push(...user.skills);
//     return allSkills;
//   }, []);

// const getSortedUniqueSkills = array =>
//   array
//     .reduce(function (allSkills, user) {
//       return allSkills.concat(user.skills);
//     }, [])
//     .filter(function (element, index, array) {
//       return array.indexOf(element) === index;
//     })
//     .sort();

const getSortedUniqueSkills = array =>
  array
    .reduce((allSkills, user) => allSkills.concat(user.skills), [])
    .filter((element, index, array) => array.indexOf(element) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
