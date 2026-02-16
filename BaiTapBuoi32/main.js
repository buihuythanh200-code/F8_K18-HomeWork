const mainElement = document.querySelector("main");
// task 1: add paragraph
function addParagraph() {
  const divElement = document.createElement("div");
  divElement.innerText = "Task 1:";

  const addParagraphBtn = document.createElement("button");
  addParagraphBtn.innerText = "Add paragraph";

  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = "Hello DOM";

  addParagraphBtn.onclick = () => {
    divElement.append(paragraphElement);
  };

  divElement.append(addParagraphBtn);
  mainElement.append(divElement);
}

addParagraph();

//Task 2: Add Item
function addItem() {
  const divElement = document.createElement("div");
  divElement.innerText = "Task 2: ";

  const addItemBtn = document.createElement("button");
  addItemBtn.innerText = "Add item";

  const ulElement = document.createElement("ul");

  divElement.append(addItemBtn);
  divElement.append(ulElement);

  let itemCount = 0;

  addItemBtn.addEventListener("click", () => {
    itemCount++;
    const liElement = document.createElement("li");
    liElement.innerText = `Item ${itemCount}`;
    ulElement.append(liElement);
  });

  mainElement.append(divElement);
}

addItem();

//Task 3: print Input Value

function printInputValue() {
  const divElement = document.createElement("div");
  divElement.innerText = "Task 3: ";

  const inputElement = document.createElement("input");
  const btnAdd = document.createElement("button");
  btnAdd.innerText = "Add";

  divElement.append(inputElement, btnAdd);

  btnAdd.addEventListener("click", () => {
    if (inputElement.value.trim()) {
      const pElement = document.createElement("p");
      pElement.innerText = `${inputElement.value}`;
      divElement.append(pElement);
      inputElement.value = "";
    }
  });

  mainElement.append(divElement);
}

printInputValue();

// Task 4: Todo mini
// Task 5: Event change color
// Task 6: Delete Item

function handleTodoList() {
  const divElement = document.createElement("div");

  divElement.innerText = "Task 4, 5, 6: ";

  const inputElement = document.createElement("input");
  const btnAdd = document.createElement("button");
  btnAdd.innerText = "Add";

  const ulElement = document.createElement("ul");

  divElement.append(inputElement, btnAdd, ulElement);

  btnAdd.addEventListener("click", () => {
    if (inputElement.value.trim()) {
      const liElement = document.createElement("li");
      liElement.innerText = `${inputElement.value}`;

      const closeElement = document.createElement("i");
      closeElement.classList.add("fa-solid", "fa-x");
      liElement.append(closeElement);

      liElement.addEventListener("click", () => {
        liElement.classList.toggle("active");
      });

      ulElement.append(liElement);
      inputElement.value = "";
    }
  });
  ulElement.addEventListener("click", (e) => {
    if (e.target.closest(".fa-x")) {
      const li = e.target.closest("li");
      li.remove();
    }
  });

  mainElement.append(divElement);
}

handleTodoList();

// Task 7:
function handleTodoClick() {
  const divElement = document.createElement("div");

  divElement.innerText = "Task 7: ";

  const inputElement = document.createElement("input");

  const btnAdd = document.createElement("button");
  btnAdd.innerText = "Add";

  const ulElement = document.createElement("ul");

  divElement.append(inputElement, btnAdd, ulElement);

  btnAdd.addEventListener("click", () => {
    if (inputElement.value.trim()) {
      const liElement = document.createElement("li");

      const spanElement = document.createElement("span");
      spanElement.classList.add("todo-text");
      spanElement.innerText = `${inputElement.value}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("todo-delete");
      deleteBtn.innerText = "Delete";

      liElement.append(spanElement, deleteBtn);

      ulElement.append(liElement);

      inputElement.value = "";
    }
  });

  ulElement.addEventListener("click", (e) => {
    if (e.target.closest(".todo-text")) {
      const span = e.target.closest(".todo-text");
      span.classList.toggle("todo-complete");
    }
    if (e.target.closest(".todo-delete")) {
      const li = e.target.closest("li");
      li.remove();
    }
  });

  mainElement.append(divElement);
}

handleTodoClick();

//Task 8: Item Single Select

function handleSingleSelect() {
  const divElement = document.createElement("div");

  divElement.innerText = "Task 8: ";

  const inputElement = document.createElement("input");

  const btnAdd = document.createElement("button");
  btnAdd.innerText = "Add";

  const ulElement = document.createElement("ul");

  divElement.append(inputElement, btnAdd, ulElement);

  btnAdd.addEventListener("click", () => {
    if (inputElement.value.trim()) {
      const liElement = document.createElement("li");

      liElement.innerText = `${inputElement.value}`;

      ulElement.append(liElement);

      inputElement.value = "";
    }
  });

  ulElement.addEventListener("click", (e) => {
    const listLi = ulElement.querySelectorAll("li");

    if (e.target.closest("li")) {
      listLi.forEach((item) => {
        item.classList.remove("active-single");
      });
      const li = e.target.closest("li");

      li.classList.add("active-single");
    }
  });

  mainElement.append(divElement);
}

handleSingleSelect();

// Task 9: Enhance Todo

function handleEnhanceTodoClick() {
  const divElement = document.createElement("div");

  divElement.innerText = "Task 9: ";

  //Handle Search
  const searchInput = document.createElement("input");
  searchInput.placeholder = "Search...";
  searchInput.addEventListener("input", () => {
    const items = ulElement.querySelectorAll("li");
    const keyword = searchInput.value.toLowerCase().trim();

    items.forEach((item) => {
      const text = item
        .querySelector(".todo-text")
        .innerText.toLowerCase()
        .trim();

      if (text.includes(keyword)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  const inputElement = document.createElement("input");

  const btnAdd = document.createElement("button");
  btnAdd.innerText = "Add";

  const ulElement = document.createElement("ul");

  divElement.append(inputElement, btnAdd);
  divElement.append(searchInput);

  divElement.append(ulElement);

  //Handle add

  btnAdd.addEventListener("click", () => {
    if (inputElement.value.trim()) {
      const liElement = document.createElement("li");

      const spanElement = document.createElement("span");
      spanElement.classList.add("todo-text");
      spanElement.innerText = `${inputElement.value}`;

      const doneBtn = document.createElement("button");
      doneBtn.innerText = "Done";
      doneBtn.classList.add("not-done");

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("todo-delete");
      deleteBtn.innerText = "Delete";

      liElement.append(spanElement, doneBtn, deleteBtn);

      ulElement.append(liElement);

      inputElement.value = "";
    }
  });

  //Handle done and delete

  ulElement.addEventListener("click", (e) => {
    if (e.target.closest(".not-done")) {
      const clickedItem = e.target.closest(".not-done");
      clickedItem.classList.toggle("done");
    }

    if (e.target.closest(".todo-delete")) {
      const li = e.target.closest("li");
      li.remove();
    }
  });

  //Handle display Done
  const doneInput = document.createElement("input");
  doneInput.type = "checkbox";
  doneInput.id = "search-done";

  const doneLabel = document.createElement("label");
  doneLabel.innerText = "Done";
  doneLabel.htmlFor = "search-done";

  divElement.append(doneInput, doneLabel);

  doneInput.addEventListener("change", () => {
    if (doneInput.checked) {
      document.querySelectorAll("li").forEach((item) => {
        item.style.display = "none";
      });

      document.querySelectorAll(".done").forEach((item) => {
        if (item.closest("li")) {
          item.closest("li").style.display = "block";
        }
      });
    } else {
      document.querySelectorAll("li").forEach((item) => {
        item.style.display = "block";
      });
    }
  });

  mainElement.append(divElement);
}
handleEnhanceTodoClick();
