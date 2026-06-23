const fruits = { 
  Bananas: 300, 
  Oranges: 200, 
  Apples: 500 
};

const text = Object.entries(fruits)
  .map(([fruit, value]) => `${fruit}: ${value}`)
  .join("<br>");


console.log(text);