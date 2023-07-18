import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import { productsData } from '../components/utils';
import AddProduct from '../components/add-product';
import DeleteIcon from '@mui/icons-material/Delete';
// Dummy data for demonstration purposes
// const orderData = [
//     { id: 1, orderNumber: 'ORD123', total: 100 },
//     { id: 2, orderNumber: 'ORD456', total: 200 },
//     { id: 3, orderNumber: 'ORD789', total: 150 },
// ];
const Dashboard = () => {
    // const [orders] = useState(orderData);
    const [products, setProducts] = useState(productsData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);

    };
    const handleDelete = (id) => {
        console.log('delete product with ID:', id);
        const updatedProducts = products.filter(item => item.id !== id);
        setProducts(updatedProducts);
    }
    return (
        <div className="dashboard">
            <div className='dash-header'>
                <button className="log" onClick={openModal}>
                    Add Product
                </button>
                {isModalOpen &&
                    <AddProduct closeModal={closeModal} />
                }
                <h2>Product Management</h2>
            </div>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price ($)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><img width={"40px"} height={"40px"} src={product.image} alt={product.name} /></td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td><DeleteIcon onClick={() => handleDelete(product.id)} sx={{ cursor: 'pointer', color: '#d65555' }} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
