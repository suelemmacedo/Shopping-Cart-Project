const fetchProducts = async (QUERY) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    return error.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
