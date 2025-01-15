// product-management.js
const products = [];

const addProduct = (product) => {
    products.push(product);
    return products;
};

module.exports = { addProduct };
