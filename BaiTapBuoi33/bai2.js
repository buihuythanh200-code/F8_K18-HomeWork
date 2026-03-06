// Task 2: Simulate an order system
function getProduct(productId) {
  console.log("Kiểm tra tồn kho");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId === 1) {
        resolve({
          productId: 1,
          name: "iPhone",
          price: 20000000,
          stock: 5,
        });
      } else {
        reject("Sản phẩm không tồn tại");
      }
    }, 1000);
  });
}

function processPayment(product) {
  console.log("Đang thanh toán...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product.stock > 0) {
        resolve({
          message: "Thanh toán thành công",
          product: product,
        });
      } else {
        reject("Hết hàng");
      }
    }, 1500);
  });
}

function createOrder(product) {
  console.log("Đang tạo đơn hàng....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        orderId: 999,
        productName: product.name,
        status: "SUCCESS",
      });
    }, 1000);
  });
}

getProduct(1)
  .then((product) => {
    if (product) {
      console.log("Tồn kho hợp lệ");
    }
    return processPayment(product);
  })
  .then((success) => {
    if (success) {
      console.log(success.message);
      return createOrder(success.product);
    }
  })
  .then((order) => {
    if (order.status) {
      console.log("Đặt hàng thành công!");
      console.log(order);
    }
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
