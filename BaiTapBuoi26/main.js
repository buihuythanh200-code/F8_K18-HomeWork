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
  if (!productId || !orderQuantity) {
    return "Invalid Input";
  }
  const order = {};

  let isExist = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      isExist = true;
      if (products[i].remaining >= orderQuantity) {
        products[i].remaining -= orderQuantity;
      } else {
        return "Not enough stock";
      }
      break;
    }
  }

  if (!isExist) {
    return "Product not found";
  }

  idOrder++;
  if (!order.id) {
    order.id = idOrder;
    order.productId = productId;
    order.quantity = orderQuantity;
  }
  orders.push(order);
}

function updateOrder(orderId, quantity) {
  if (quantity < 0) {
    return "Invalid Input";
  }

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      for (let j = 0; j < products.length; j++) {
        if (orders[i].productId === products[j].id) {
          let oldRemaining = products[j].remaining;
          let newRemaining;
          let orderQuantityChange = quantity - orders[i].quantity;
          if (orderQuantityChange > 0) {
            if (oldRemaining < orderQuantityChange) {
              return "Out of stock";
            } else {
              newRemaining = oldRemaining - orderQuantityChange;
            }
          } else {
            newRemaining = oldRemaining - orderQuantityChange;
          }
          products[j].remaining = newRemaining;
          orders[i].quantity = quantity;
          let delta = newRemaining - oldRemaining;
          return (
            "Order updated successfully " + "-" + ` Remaining change ${delta}`
          );
        }
      }
    }
  }
  return "Not found";
}

function deleteOrder(orderId) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      for (let j = 0; j < products.length; j++) {
        if (products[j].id === orders[i].productId) {
          products[j].remaining += orders[i].quantity;
          break;
        }
      }
      orders.splice(i, 1);
      return "Order Completed Delete";
    }
  }

  return "Not Found";
}

createOrder(1, 15);
console.log(orders);
console.log(products);
console.log(updateOrder(1, 20));
console.log(orders);
console.log(products);
console.log(deleteOrder(1));
console.log(products);
console.log(orders);
