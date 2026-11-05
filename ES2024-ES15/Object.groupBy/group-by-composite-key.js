const inventory = [
  { type: 'fruit', subType: 'citrus', name: 'orange', quantity: 10 },
  { type: 'fruit', subType: 'berry', name: 'strawberry', quantity: 30 },
  { type: 'vegetable', subType: 'root', name: 'carrot', quantity: 20 },
  { type: 'vegetable', subType: 'leafy', name: 'lettuce', quantity: 15 },
  { type: 'fruit', subType: 'citrus', name: 'lemon', quantity: 5 }
];

const groupByTypeAndSubType = Object.groupBy(inventory, ({ type, subType }) => // Group by the `type` and `subType` properties
  `${type}::${subType}` // Composite key made of `type` and `subType`
);

console.log(groupByTypeAndSubType);
