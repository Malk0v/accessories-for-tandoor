// Весь ваш JavaScript-код здесь
// console.log("hello its cart");
// import Notify from "../notifix/dist/notiflix-notify-aio-3.2.7";
// console.log(Notify());
// Notify.success("Sol lucet omnibus");
// Объект корзины
const cart = {
  items: [],

  // Метод для добавления товара в корзину
  addItem: function (id, name, sizeId) {
    const productElement = document.querySelector(`[data-id="${id}"]`);
    const selectedSize = document.getElementById(sizeId).value;
    alert(`${selectedSize} додано до кошика`);
    const price = JSON.parse(productElement.getAttribute("data-sizes"))[
      selectedSize
    ];

    // Проверяем, есть ли уже такой товар в корзине
    const existingItem = this.items.find(
      (item) => item.id === id && item.size === selectedSize
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({
        id,
        name,
        size: selectedSize,
        price,
        quantity: 1,
      });
    }

    this.calculateTotal();
    this.renderCart();
  },

  // Метод для изменения количества товара в корзине
  updateQuantity: function (itemId, newQuantity) {
    const itemToUpdate = this.items.find((item) => item.id === itemId);
    if (itemToUpdate) {
      itemToUpdate.quantity = newQuantity;
    }

    this.calculateTotal();
    this.renderCart();
  },

  // Метод для удаления товара из корзины
  removeItem: function (itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);

    this.calculateTotal();
    this.renderCart();
  },

  // Метод для очистки корзины
  clearCart: function () {
    this.items = [];
    this.calculateTotal();
    this.renderCart();
  },

  // Метод для расчета общей стоимости корзины
  calculateTotal: function () {
    this.total = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },

  // Метод для отображения корзины на странице
  renderCart: function () {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    // Очищаем текущий список корзины
    cartItemsElement.innerHTML = "";

    // Добавляем новые элементы в список корзины
    this.items.forEach((item) => {
      const li = document.createElement("li");
      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.min = "1";
      quantityInput.value = item.quantity;
      quantityInput.addEventListener("change", (e) =>
        this.updateQuantity(item.id, parseInt(e.target.value))
      );
      li.textContent = `${item.name} - Размер: ${
        item.size
      } - Цена: ${item.price.toFixed(2)} - Количество: `;
      li.appendChild(quantityInput);
      const removeButton = document.createElement("button");
      removeButton.textContent = "Удалить";
      removeButton.addEventListener("click", () => this.removeItem(item.id));
      li.appendChild(removeButton);
      cartItemsElement.appendChild(li);
    });

    // Обновляем отображение общей стоимости
    totalElement.textContent = `Итого: ${this.total.toFixed(2)}`;
  },

  // Метод для сохранения корзины в локальное хранилище
  saveCart: function () {
    localStorage.setItem("cart", JSON.stringify(this.items));
  },

  // Метод для загрузки корзины из локального хранилища
  loadCart: function () {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      this.items = JSON.parse(storedCart);
      this.calculateTotal();
      this.renderCart();
    }
  },
};

// Функция для добавления товара в корзину при нажатии кнопки "Добавить в корзину"
function addToCart(id, name, sizeId) {
  cart.addItem(id, name, sizeId);
}

// Функция для очистки корзины
function clearCart() {
  cart.clearCart();
}

// Функция для сохранения корзины в локальное хранилище
function saveCart() {
  cart.saveCart();
}

// Загрузка корзины при загрузке страницы
window.onload = function () {
  cart.loadCart();
};

function openModal() {
  renderModalCart();
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function renderModalCart() {
  const modalCartItemsElement = document.getElementById("modal-cart-items");
  modalCartItemsElement.innerHTML = "";

  cart.items.forEach((item) => {
    // const li = document.createElement("li");
    // li.textContent = `${item.name} - Размер: ${
    //   item.size
    // } - Цена: ${item.price.toFixed(2)} - Количество: ${item.quantity}`;
    // modalCartItemsElement.appendChild(li);
  });

  // const modalTotalElement = document.getElementById("modal-total");
  // modalTotalElement.textContent = `Итого: ${cart.total.toFixed(2)}`;
}
