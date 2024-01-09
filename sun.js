const sunDB = [
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/sun.svg",
    price: 100,
    country: ["Китай"],
  },
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/sun.svg",
    price: 100,
    country: ["Китай"],
  },
  {
    id: "01",
    name: "Amshar",
    description: "8672-C8",
    image: "./image/sun.svg",
    price: 100,
    country: ["Китай"],
  },
];

const products = document.querySelector(".js-sun");
console.log(products);
console.log(sunDB);

const menuMarkup = sunDB
  .map(({ image, name, price, description, country }) => {
    return `
    <div>
      <li>
        <article class="products-item">
        <img src="${image}" alt="${name}" width="200px"/>
        <h4> 👓 модель ${name}</h4>
        <p> артикул ${description}</p>
        <p> ${country}</p>
        <p> $ ${price} грн</p>
        </article>
      </li>
      
    </div>`;
  })
  .join("");

const ingredient = (sunDB) => {
  sunDB
    .map((country) => {
      return `<li class="tag-list__item"> ${country} </li >`;
    })
    .join("");
};

products.insertAdjacentHTML("beforeend", menuMarkup);
