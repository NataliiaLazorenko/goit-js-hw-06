/* Масив об'єктів користувачів
 * reduce

 * Отримай загальну суму балансу (суму значень властивості balance) всіх користувачів.

 * Використовуй деструктивне присвоювання для параметра функції {balance} без пробілів і 
 * перенесення на новий рядок

 * Використовуй тільки перебираючі методи масиву, які не змінюють (не мутують) вихідний масив.
 * Тобто, не можна використовувати for, splice, push і т.п. мутуючі методи.
 */
import users from './users.js';

// Write code under this line
// без ДП
// const calculateTotalBalance = array =>
//   array.reduce((total, user) => total + user.balance, 0);

// з ДП
const calculateTotalBalance = array =>
  array.reduce((total, { balance }) => total + balance, 0);

console.log(calculateTotalBalance(users));
// 20916
