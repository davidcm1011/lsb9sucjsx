import { useEffect, useState } from "react";
import './card.css';

export const Card =() => {
    const [product, setProduct] =useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
        .then(res => res.json())
        .then(data => {setProduct(data)})
    }, []);

    return (
        <div>
            <p>{product.title}</p>
            {product.images && product.images.length > 0 && (
                <img src={product.images[0]} alt="product" />
            )}
            <p className="texto">Descripcion: {product.description}</p>
            <p className="texto">USD$: {product.price}</p>
        </div>
    )
};