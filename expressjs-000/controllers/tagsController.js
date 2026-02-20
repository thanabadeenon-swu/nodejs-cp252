let count = 0;
const tags = [];

const getTags = (req, res) => {
  tags.push(count);
  res.json({ tags });
  count += 1;
};

// Implement other controllers related to tags

module.exports = {
  getTags,
  // Export other tag controllers
};
