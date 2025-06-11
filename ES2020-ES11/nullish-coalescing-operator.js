const or = '' || 'default';

console.log(or); // => 'default'

const nullish = '' ?? 'default';

console.log(nullish); // => ''