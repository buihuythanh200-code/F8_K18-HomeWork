const products = [
  { id: 1, name: "iPhone", price: 2000 },
  { id: 2, name: "Samsung", price: 1500 },
  { id: 3, name: "Xiaomi", price: 1000 },
  { id: 4, name: "Oppo", price: 1200 },
];

const revenues = [
  { id: 1, revenue: 0 },
  { id: 2, revenue: 0 },
  { id: 3, revenue: 0 },
  { id: 4, revenue: 0 },
];

const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 3 },
    ],
  },
  {
    id: 3,
    items: [
      { productId: 2, quantity: 2 },
      { productId: 4, quantity: 1 },
    ],
  },
];

for (let order in orders) {
  for (let item in orders[order].items) {
    for (let product in products) {
      if (orders[order].items[item].productId === products[product].id) {
        revenues[product].revenue +=
          orders[order].items[item].quantity * products[product].price;
        break;
      }
    }
  }
}

function findProductMaxRevenue() {
  let product = {
    id: 0,
    revenue: 0,
  };
  for (let i in revenues) {
    if (revenues[i].revenue > product.revenue) {
      product.revenue = revenues[i].revenue;
      product.id = revenues[i].id;
    }
  }
  if (product.id === 0) return null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === product.id) {
      return products[i].name;
    }
  }
}
console.log("Revenues: ", revenues);
console.log("Product has max revenue is:", findProductMaxRevenue());
