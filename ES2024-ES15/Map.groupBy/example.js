const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
];

const restock = { restock: true };
const sufficient = { restock: false };

// Unlike Object.groupBy, keys can be any value (here, objects)
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);

console.log(result.get(restock).map(item => item.name)); // => [ 'asparagus', 'bananas', 'cherries' ]
console.log(result.get(sufficient).map(item => item.name)); // => [ 'goat' ]
