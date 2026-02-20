const categories = [];

const getCategories = (req, res) => {
  if (categories.length === 0) {
    categories.push('unknown');
    res.json({ categories });
  }
  else {
    res.json({ categories });
  }
};

// Implement other controllers related to categories

module.exports = {
  getCategories,
  // Export other category controllers
};
