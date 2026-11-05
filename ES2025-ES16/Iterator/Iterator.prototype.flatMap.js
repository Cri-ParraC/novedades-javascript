const sentences = ['Hello world', 'How are you'].values();

console.log(sentences.flatMap(s => s.split(' ')).toArray()); // => [ 'Hello', 'world', 'How', 'are', 'you' ]
