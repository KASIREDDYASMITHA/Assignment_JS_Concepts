function processCategories(categories) {
  return categories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
}


function sortCategoriesByCount(categories) {
  return Object.entries(processCategories(categories))
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
}


const input = ["electronics","clothing","electronics","toys","clothing","toys","toys"];
console.log(processCategories(input));       

