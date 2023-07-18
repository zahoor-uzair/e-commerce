import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../components/utils';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = productsData.find((product) => product.id === parseInt(id));

    if (!product) {
        return <h2 className="product-not-found">Product not found</h2>;
    }

    const { name, image, price } = product;

    return (
        <div className="product-detail">
            <h2 className="product-name">{name}</h2>
            <div className="product-infos">
                <div className="product-d-image">
                    <img src={image} alt={name} />
                </div>
                <div className="product-details">
                    <p className="product-price">Price: ${price}</p>
                    <p className="product-description">Description: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
