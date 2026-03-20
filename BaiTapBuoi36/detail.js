const paragraphDetail = document.querySelector(".detail");
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
axios
  .get("https://dummyjson.com/products")
  .then((res) => {
    const products = res.data.products;
    console.log(products);

    const product = products.find((item) => {
      return item.id === id;
    });
    console.log(product);

    paragraphDetail.innerText = product.description;
  })
  .catch((rej) => {
    console.log(rej);
  });

function goBack() {
  window.location.href = "index.html";
}
