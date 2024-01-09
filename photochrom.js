const photohromeDB = [
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/photohrome.jpeg",
    price: 190,
    diopria: ["-1", "+1", "+2", "+3"],
    country: "Украина",
  },
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/photohrome.jpeg",
    price: 190,
    diopria: ["-1", "+1", "+2", "+3"],
    country: "Украина",
  },
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/photohrome.jpeg",
    price: 190,
    diopria: ["-1", "+1", "+2", "+3"],
    country: "Украина",
  },
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/photohrome.jpeg",
    price: 190,
    diopria: ["-1", "+1", "+2", "+3"],
    country: "Украина",
  },
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/photohrome.jpeg",
    price: 190,
    diopria: ["-1", "+1", "+2", "+3"],
    country: "Украина",
  },
];

const products = document.querySelector(".js-photochrom");
console.log(products);
console.log(photohromeDB);

const menuMarkup = photohromeDB
  .map(({ image, name, price, description, diopria, country }) => {
    return `
    <div>
        <li>
        <article class="products-item">
        <img src="${image}" alt="${name}" width="200px"/>
        <h4> 👓 модель ${name}</h4>
        <p> артикул ${description}</p>
        <p> диоптрии ${diopria}</p>
        <p> ${country}</p>
        <p> $ ${price} грн</p>
        </article>
    </li>

    </div>`;
  })
  .join("");

const ingredient = (photohromeDB) => {
  photohromeDB
    .map((country) => {
      return `<li class="tag-list__item"> ${country} </li >`;
    })
    .join("");
};

products.insertAdjacentHTML("beforeend", menuMarkup);
