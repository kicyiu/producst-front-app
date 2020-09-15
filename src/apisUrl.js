console.log('API URL: ', process.env.NODE_ENV);

const API_URL = process.env.NODE_ENV === 'production' ? 'https://ky-products-api.herokuapp.com/api' : 'http://localhost:8080/api'; 

export const findProductsUrl =  `${API_URL}/products/findProducts`;

