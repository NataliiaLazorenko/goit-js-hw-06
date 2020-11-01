/* Масив об'єктів користувачів
 * filter, map і створення анонімних об'єктів
 
 * Отримай масив із об'єктів, які складаються тільки із властивостей name та email тих користувачів,
 * які попадають у вікову категорію від min до max років (значення властивості age).
 
 * ===================================================================================================
 * Порівняння, приклад
   const x = 13;

   // num більше 10 ?
   const larger = num > 10; // true

   // num менше 100 ?
   const smaller = 100 > num; // true

   // num знаходиться між 10 і 100 ?
   const between = smaller && larger; // true

 * Створення анонімних об'єктів
   const arr = Array(3)
    .fill('')
    .map((e,i) => ({['index']: i }));
   /* [ { index: 0 }, { index: 1 }, { index: 2 } ] */
/* ===================================================================================================
 * Використовуй тільки перебираючі методи масиву, які не змінюють (не мутують) вихідний масив.
 * Тобто, не можна використовувати for, splice, push і т.п. мутуючі методи.
 */
import users from './users.js';

// Write code under this line
const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age > min && age < max)
    .map(({ name, email }) => ({ name, email }));

console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */
