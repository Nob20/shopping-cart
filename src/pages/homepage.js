import React from 'react';

import ProductList from '../components/product-listing';

import data from '../data/products.json';

export default function Homepage(props) {
    return (
        <div>
        <h2>Homepage</h2>
        <ProductList products={data.products}/>
        </div>
    )  
}