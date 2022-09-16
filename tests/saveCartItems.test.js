const localStorageSimulator = require("../mocks/localStorageSimulator");
const saveCartItems = require("../helpers/saveCartItems");
const { expect } = require("@jest/globals");

localStorageSimulator("setItem");

describe("3 - Teste a função saveCartItems", () => {
  it('Testa se ao executar "saveCartItems" com um "cartItem" como argumento o método local.Storage.SetItem é chamado', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Testa se ao executar "saveCartItems" com um "cartItem" como argumento o método local.Storage.SetItem é chamado com dois parâmetros, sendo o primeiro a chave "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems('product');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'product');
  });
});
