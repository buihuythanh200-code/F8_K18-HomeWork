function goDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}
function showFormAdd() {
  document.querySelector(".overlay-add").classList.toggle("hidden");
}
let currentEditElement = null;
let currentEditId = null;

function showFormFix(id, title, element) {
  currentEditId = id;
  currentEditElement = element;
  document.querySelector(".overlay-fix").classList.toggle("hidden");
  document.querySelector("#title-form-fix").value = title;
}

function handleDeletePost(id, element) {
  const result = confirm("Bạn muốn xóa Post?");
  if (!result) return;

  axios
    .delete(`https://dummyjson.com/products/${id}`)
    .then((res) => {
      console.log(res.data);

      element.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}
function getData() {
  axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      const products = res.data.products;
      console.log(products);
      // Add data to li
      const ulElement = document.querySelector(".list-post");
      ulElement.innerHTML = "";
      products.forEach((product) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = `
            ${product.title} <button onClick = "goDetail(${product.id})">Chi tiết</button> <button class="btn-fix" ">Sửa</button> <button class="btn-delete">Xóa</button>
        `;
        liElement.querySelector(".btn-fix").onclick = () => {
          showFormFix(product.id, product.title, liElement);
        };
        liElement.querySelector(".btn-delete").onclick = () => {
          handleDeletePost(product.id, liElement);
        };
        ulElement.appendChild(liElement);
      });
    })
    .catch((rej) => {
      console.log(rej);
    });
}

getData();

function handleAddPost() {
  const form = document.querySelector(".modal-form-add");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title_form = document.querySelector("#title-form-add");
    if (!title_form.value.trim()) return;

    axios
      .post("https://dummyjson.com/products/add", {
        title: title_form.value.trim(),
      })
      .then((res) => {
        const newProduct = res.data;
        console.log(newProduct);

        const ulElement = document.querySelector(".list-post");
        const liElement = document.createElement("li");
        liElement.innerHTML = `
          ${newProduct.title}
          <button onclick="goDetail(${newProduct.id})">Chi tiết</button>
          <button class="btn-fix" onclick = "showFormFix('${newProduct.title}')">Sửa</button>
          <button class="btn-delete">Xóa</button>
        `;
        liElement.querySelector(".btn-fix").onclick = () => {
          showFormFix(newProduct.id, newProduct.title, liElement);
        };
        liElement.querySelector(".btn-delete").onclick = () => {
          handleDeletePost(newProduct.id, liElement);
        };
        ulElement.prepend(liElement);

        title_form.value = "";
        document.querySelector(".overlay-add").classList.add("hidden");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

handleAddPost();

function handleFixPost() {
  const form = document.querySelector(".modal-form-fix");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title_form = document.querySelector("#title-form-fix");
    if (!title_form.value.trim()) return;

    axios
      .patch(`https://dummyjson.com/products/${currentEditId}`, {
        title: title_form.value.trim(),
      })
      .then((res) => {
        const updatedProduct = res.data;
        console.log(updatedProduct);

        // 🔥 update trực tiếp UI
        currentEditElement.innerHTML = `
          ${updatedProduct.title}
          <button onclick="goDetail(${updatedProduct.id})">Chi tiết</button>
          <button class="btn-fix">Sửa</button>
          <button class="btn-delete">Xóa</button>
        `;

        // gắn lại event sửa
        currentEditElement.querySelector(".btn-fix").onclick = () => {
          showFormFix(
            updatedProduct.id,
            updatedProduct.title,
            currentEditElement,
          );
        };
        currentEditElement.querySelector(".btn-delete").onclick = () => {
          handleDeletePost(updatedProduct.id, currentEditElement);
        };
        title_form.value = "";
        document.querySelector(".overlay-fix").classList.add("hidden");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

handleFixPost();
