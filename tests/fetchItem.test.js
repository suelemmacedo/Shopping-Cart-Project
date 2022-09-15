require("../mocks/fetchSimulator");
const { fetchItem } = require("../helpers/fetchItem");
const item = require("../mocks/item");
const { expect } = require("@jest/globals");

describe("2 - Teste a função fetchItem", () => {
  it("Teste se fethcItem é uma função", () => {
    expect(typeof fetchItem).toBe("function");
  });
  it("Teste se a função fetch foi chamada", async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });
  it("Teste se a função fetch foi chamada com o endpoint correto", async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/items/MLB1615760527"
    );
  });
  it('Teste se o retorno da função é uma estrutura de dados igual ao objeto "MLB1615760527"', async () => {
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  });
  it('Teste se a função fetchItem sem argumentos, retorna um erro com a mensagem: "You must provide an URl"', async () => {
    await fetchItem();
    expect(fetch).toThrow();
  });
});
