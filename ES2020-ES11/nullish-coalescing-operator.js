const withOr = '' || 'default';

console.log(withOr); // => 'default'

const withNullish = '' ?? 'default';

console.log(withNullish); // => ''
