const getSavedCartItems = () => {
  localStorage.getItem('produtos');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
