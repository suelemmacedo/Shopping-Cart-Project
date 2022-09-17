// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições!

/* const { fetchItem } = require("./helpers/fetchItem"); */

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
 const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */

// Com orientações e ajuda de Melquisedeque (Megas)
const button = document.getElementsByClassName('empty-cart')[0];
const carrinho = document.getElementsByClassName('cart__items')[0];
const totPrice = document.getElementsByClassName('total-price')[0];

function totalPrice() {
  let valorInicial = 0;
  for (let index = 0; index < carrinho.children.length; index += 1) {
    const price = (+carrinho.children[index].innerText.split('$')[1]);
    valorInicial += price;
  }
  totPrice.innerHTML = valorInicial.toFixed(2);
}

function cartItemClickListener(e) {
  e.target.remove();
  totalPrice();
}
function removeProducts() {
  carrinho.innerHTML = '';
  totalPrice();
}
button.addEventListener('click', removeProducts);

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const adicionarItemAoLocalStorage = () => {
  saveCartItems(carrinho.innerHTML);
  totalPrice();
};
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  if (element === 'button') {
    /* console.log('é um botão'); */
    e.addEventListener('click', async (event) => {
      const id = event.target.parentNode.firstChild.innerText;
      const results = await fetchItem(id);
      createCartItemElement(results);
      /* console.log(createCartItemElement(results)); */
      carrinho.appendChild(createCartItemElement(results));
      adicionarItemAoLocalStorage();
      /* console.log(results);
    console.log(event.target.parentNode.firstChild.innerText); */
    });
  }
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) =>
  product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const loading = document.getElementsByClassName('loading')[0];
async function createListProducts() {
  const data = await fetchProducts('computador');
  loading.remove();
  const resultados = await data.results;
  const section = document.querySelector('.items');
  /* console.log(resultado); */
  resultados.forEach((resultado) => {
    section.appendChild(createProductItemElement(resultado));
  });
}

function addEvent() {
/* console.log(carrinho.children); */
Array.from(carrinho.children).forEach((element) => {
  /* console.log(+element.innerText.split('$')[1]); */
  element.addEventListener('click', cartItemClickListener);
  totalPrice();
});
}

window.onload = () => {
  createListProducts();
  carrinho.innerHTML = getSavedCartItems();
  addEvent();
};