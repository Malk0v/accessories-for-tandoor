const diopriaDB = [
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/diopria.jpeg",
    price: 100,
    diopria: ["-1", "+1", "+2", "+3"],
    country: "Украина",
  },
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/diopria.jpeg",
    price: 100,
    diopria: ["-1", "+1", "+2", "+3"],
    country: "Украина",
  },
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/diopria.jpeg",
    price: 100,
    diopria: ["-1", "+1", "+2", "+3"],
    country: "Украина",
  },
];

const products = document.querySelector(".js-dioptre");
console.log(products);
console.log(diopriaDB);

const menuMarkup = diopriaDB
  .map(({ image, name, price, description, diopria, country }) => {
    return `
    <div>
      <li>
        <article class="products-item">
        <img src="${image}" alt="${name}" width="200px"/>
        <h4> 👓 модель ${name}</h4>
        <p> артикул ${description}</p>
        <p> диоптрии ${diopria}</p>
        <p> $ ${price} грн</p>
        <p> Производитель: ${country}</p>
        </article>
      </li> 
    </div>`;
  })
  .join("");

const diopria = (diopriaDB) => {
  diopriaDB
    .map((diopria) => {
      return `<li ${diopria} </li >`;
    })
    .join("");
};

products.insertAdjacentHTML("beforeend", menuMarkup);
