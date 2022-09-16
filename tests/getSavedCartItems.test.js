const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se ao executar "getSavedCartItem" o método local.Storage.GetItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Testa se ao executar "getSavedCartItems" o método local.Storage.GetItem é chamado com um "cartItems" como parâmetro', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled('cartItems');
  });
  
});
