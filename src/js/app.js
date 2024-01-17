import canIterate from './canIterate';

console.log(`new Map() - ${canIterate(new Map())}`); // true
console.log(`new Set() - ${canIterate(new Set())}`); // true
console.log(`Null - ${canIterate(null)}`); // false
console.log(`10 - ${canIterate(10)}`); // false
console.log(`Netology - ${canIterate('Netology')}`); // true