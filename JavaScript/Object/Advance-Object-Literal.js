let category = [
  [
    (type = "A"),
    (product = {
      item1: {
        name: "a1",
        price: 100
      },
      item2: {
        name: "a2",
        price: 100
      }
    })
  ],
  [
    (type = "B"),
    (product = {
      item1: {
        name: "b1",
        price: 200
      },
      item2: {
        name: "b2",
        price: 300
      }
    })
  ]
];

category.push([(type = "C"), product = {item1:{name:'c1',price:500},item2:{name:'c2',price:600}}]);

console.log(category);
