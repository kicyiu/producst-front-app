import React, { useState } from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { findProductsUrl } from "../apisUrl"
import Loading from "./Loading";

function App() {

    const searchUrl = findProductsUrl;
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [hasDeal, setHasDeal] = useState(false);
    

    function searchProducts (text) {
        console.log('searchProducts text: ', text);
        if (text) {
            const url= `${searchUrl}/${text}`;
            setLoading(true);
            setSearchText(text);
            fetch(url).then(
                data => (data.json())
            ).then(
                productsData => {
                    console.log(productsData);
                    setLoading(false);
                    if (productsData.statusCode === 200) {
                        setProducts(productsData.data.products);
                    } else {
                        setProducts([]);
                    }
    
                    setHasDeal(productsData.data.palindrono);
                }
            )
            .catch(error => {
                setLoading(false);
                console.log('searchProducts error: ', error);
            })
        }
    }


    return (
        <div>
            <div>
                <NavBar onSearch={searchProducts}/>
            </div>
            
            
            <Loading loading={loading} />
      
            
        
            {searchText !== '' && (
                products.length > 0 ? (
                    <div>
                        <p>
                            Resultados para <b>{searchText}</b>:
                        </p>
                        <div className="card-columns m-5 animated fadeIn">
                            {products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    brand={product.brand}
                                    description={product.description}
                                    image={product.image}
                                    price={product.price}
                                    deal={hasDeal}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    !loading && (
                        <p>
                            No se encontró ningún resultados para <b>{searchText}</b>
                        </p>
                    )
                )                
            )}
            

        </div>
    );
}

export default App;