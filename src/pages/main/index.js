import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css'

export default class Main extends Component {
    // concept of state to store the variables
    state = {
        // storing the products
        products: [],
        // storing number of pages, page limit ...
        productInfo: {},
        // storing the data from page 1
        page: 1,
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        // the api variable already has the full link of our api, here we are referencing only the /products
        const response = await api.get(`/products?page=${ page }`);

        // ... means the rest of the docs viewing data will be stored in the productInfo state
        const { docs, ...productInfo } = response.data; 

        // bring the array with all registered products from our API
        this.setState({ products: docs, productInfo, page });
    };

    // function previous... 
    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    // ...and next pages
    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render() {
        const { products, page, productInfo } = this.state;

        return ( // we created an article to list the products registered on the web page
            <div className="product-list">
                { products.map(product => ( // .map is to go through our api
                    <article key={ product._id }> {/* a unique key is required */}
                        <img src= { product.image_url } alt="Products Images"/> {/* .image_url insert product's image */}
                        <strong>{ product.title }</strong> {/* .title is the value of our api */}
                        <p>{ product.description }</p> {/* .description is the value of our api */}
                        <p>{ product.company }</p> {/* .company is the value with the company name coming from api */}
                        <p>R${ product.price }</p> {/* .price is the value of the product coming from our api */}
                        
                        <Link to={`/products/${ product._id }`}>More details</Link> {/* .id is the value of the product coming from our api */}
                    </article>
                )) }
                { /* pages - next and previous */ }
                <div className="actions">
                    <button disabled={ page === 1 } onClick={ this.prevPage }>
                        Previous
                    </button>
                    <button disabled={ page === productInfo.pages } onClick={ this.nextPage }>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}