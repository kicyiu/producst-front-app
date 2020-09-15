
export const findProductsUrl = process.env.ENVIROMENT === 'dev' ? "http://localhost:8080/api/products/findProducts" : "https://ky-products-api.herokuapp.com/api/products/findProducts";

