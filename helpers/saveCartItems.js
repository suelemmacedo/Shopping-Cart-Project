const saveCartItems = (valor) => {
  localStorage.setItem('produtos', valor);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
