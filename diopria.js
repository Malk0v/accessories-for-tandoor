const diopriaDB = [
  {
    id: "01",
    name: "Крюк",
    image: "./image/cru.jpg",
    price: ["Звичайний 100грн <br /> Великий 150грн <br> Тройний 300грн"],
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
  .map(({ image, name, price }) => {
    return `<div>
      <li>
        <article class="products-item">
        <h2>${name}</h2>
        <img src="${image}" loading="lazy" alt="${name}" width="300px"/>
        <p> ${price}</p>
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
