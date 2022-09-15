const fetchItem = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const request = await fetch(url);
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
