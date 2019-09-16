import React, { Component } from "react";
import api from '../../services/api';

import './styles.css';

export default class Product extends Component {

    // storing data in states
    state = {
        product: {}
    };

    // loading product information
    async componentDidMount() {
        // getting the API id
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${ id }`);
    
        // the product will be filled with the values coming from our api
        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{ product.title }</h1>
                <p>{ product.description }</p>
                <img src={ product.image_url } alt="Products Images"/>
                <p>
                    To buy this product access <a href={ product.web_url }>{ product.web_url }</a>
                </p>

            </div>
        );
    }
}