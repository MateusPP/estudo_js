const escola = "Cod3r";

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('o'))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,maria,Pedro'.split(','));
console.log('Ana,maria,Pedro'.split(/,/));
console.log('Ana,maria,Pedro'.split(/./));
