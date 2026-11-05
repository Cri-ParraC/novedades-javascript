const sentences = ['Hello world', 'How are you'];

console.log(sentences.map(s => s.split(' '))); // => [ [ 'Hello', 'world' ], [ 'How', 'are', 'you' ] ]
console.log(sentences.flatMap(s => s.split(' '))); // => [ 'Hello', 'world', 'How', 'are', 'you' ]
