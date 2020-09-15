
export const findProductsUrl = process.env.ENVIROMENT === 'production' ? "https://ky-products-api.herokuapp.com/api/products/findProducts" : "http://localhost:8080/api/products/findProducts" ;

