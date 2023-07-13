import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import { productsData } from '../components/utils';
// Dummy data for demonstration purposes
// const orderData = [
//     { id: 1, orderNumber: 'ORD123', total: 100 },
//     { id: 2, orderNumber: 'ORD456', total: 200 },
//     { id: 3, orderNumber: 'ORD789', total: 150 },
// ];
const Dashboard = () => {
    // const [orders] = useState(orderData);
    const [products] = useState(productsData);

    return (
        <div className="dashboard">
            {/* <h2>Order Statistics</h2>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.orderNumber}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}

            <h2>Product Management</h2>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><img width={"60px"} height={"60px"} src={product.image} alt={product.name} /></td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
