import React, { useState } from 'react';
import './Addproduct.css';
import { productsData } from './utils';

const AddProduct = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        image: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        productsData.push({ ...formData, id: productsData.length + 1 });
        closeModal();
    };

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                        &times;
                    </span>
                    <h2>Product</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className='label'>Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='label'>Price</label>
                            <input
                                type="text"
                                name="price"
                                required
                                value={formData.price}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='label'>Category</label>
                            <div className="radio-group">
                                <div className='radiofield'>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="camera"
                                        checked={formData.category === 'camera'}
                                        onChange={handleInputChange}
                                    />
                                    <label className="radio-label">
                                        Camera
                                    </label>
                                </div>
                                <div className='radiofield'>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="headphone"
                                        checked={formData.category === 'headphone'}
                                        onChange={handleInputChange}
                                    />
                                    <label className="radio-label">
                                        Headphone
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className='label'>Image Url</label>
                            <input
                                type="text"
                                name="image"
                                required
                                value={formData.image}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className="modal-btn" type="submit">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
