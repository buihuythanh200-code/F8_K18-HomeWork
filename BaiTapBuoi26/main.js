const products = [
  { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
  { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
  { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
  { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
  { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 },
];

const orders = [];
let idOrder = 0;
function createOrder(productId, orderQuantity) {
  if (!Number.isInteger(productId) || productId <= 0) {
    return "Invalid Input";
  }
  if (!Number.isInteger(orderQuantity) || orderQuantity <= 0) {
    return "Invalid Input";
  }

  let product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    return "Not found";
  }

  if (product.remaining < orderQuantity) {
    return "Out of stock";
  }

  product.remaining -= orderQuantity;

  idOrder++;

  const order = {
    id: idOrder,
    productId: productId,
    quantity: orderQuantity,
  };

  orders.push(order);
}

function updateOrder(orderId, quantity) {
  if (!Number.isInteger(orderId) || orderId <= 0) {
    return "Invalid Input";
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return "Invalid Input";
  }

  let order = null;

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      order = orders[i];
      break;
    }
  }

  if (!order) {
    return "Not found";
  }

  // Find Product compatible with the order

  let product = null;

  for (let j = 0; j < products.length; j++) {
    if (order.productId === products[j].id) {
      product = products[j];
      break;
    }
  }

  if (!product) {
    return "Not found";
  }

  // Calculate the quantity difference

  const oldQuantity = order.quantity;
  const deltaQuantity = quantity - oldQuantity;

  if (deltaQuantity > 0) {
    if (product.remaining < deltaQuantity) {
      return "Out of Stock";
    }
  }

  let oldRemaining = product.remaining;

  product.remaining -= deltaQuantity;

  let deltaRemaining = product.remaining - oldRemaining;

  order.quantity = quantity;

  return "Order Completed Update";
}

function deleteOrder(orderId) {
  if (!Number.isInteger(orderId) || orderId <= 0) {
    return "Invalid Input";
  }

  let orderIndex = -1;
  let order = null;

  for (let i = 0; i < orders.length; i++) {
    if (orderId === orders[i].id) {
      order = orders[i];
      orderIndex = i;
      break;
    }
  }

  if (!order) {
    return "Not found";
  }

  let product = null;

  for (let j = 0; j < products.length; j++) {
    if (order.productId === products[j].id) {
      product = products[j];
      break;
    }
  }

  if (!product) {
    return "Not found";
  }

  product.remaining += order.quantity;

  orders.splice(orderIndex, 1);

  return "Order Completed Delete";
}

createOrder(1, 15);
console.log(orders);
console.log(products);
console.log(updateOrder(1, 5));
console.log(orders);
console.log(products);
console.log(deleteOrder(1));
console.log(products);
console.log(orders);
