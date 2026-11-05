const conOr = '' || 'por defecto';

console.log(conOr); // => 'por defecto'

const conNullish = '' ?? 'por defecto';

console.log(conNullish); // => ''
