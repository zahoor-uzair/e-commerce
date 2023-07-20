import React, { useContext, useState } from 'react';
import './Dashboard.css';
import { productsData } from '../components/utils';
import AddProduct from '../components/dashboard-comp/add-product';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CartContext } from '../context/cartcontext';
// import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, } from 'recharts';
const data = [
    { name: ' A', uv: 400, pv: 2400, amt: 2400 },
    { name: ' B', uv: 300, pv: 1398, amt: 2210 },
    { name: ' C', uv: 200, pv: 9800, amt: 2290 },
    { name: ' D', uv: 278, pv: 3908, amt: 2000 },
    { name: ' E', uv: 189, pv: 4800, amt: 2181 },
    { name: ' F', uv: 239, pv: 3800, amt: 2500 },
    { name: ' G', uv: 349, pv: 4300, amt: 2100 },
];



const RenderLineChart = () => {
    return (
        <LineChart width={500} height={300} data={data} >
            <Line type="monotone" dataKey="uv" stroke="black" />
            <CartesianGrid stroke="white" strokeDasharray="2 2" />
            <XAxis dataKey="name" stroke='white' />
            <YAxis stroke='white' />
        </LineChart>
    )
}
const getPath = (x, y, width, height) => (
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);
const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const RenderBarChart = () => {
    return (
        <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="name" stroke='white' />
            <YAxis stroke='white' />
            <Bar dataKey="uv" barSize={30} fill="#2c2c2c" shape={<TriangleBar />}
            />
        </BarChart>
    )
}




const Dashboard = () => {
    const [products, setProducts] = useState(productsData);
    const { cartItems, removeFromCart } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        console.log('Delete product with ID:', id);
        const updatedProducts = products.filter((item) => item.id !== id);
        setProducts(updatedProducts);
    };

    return (
        <>
            <div className="dash-header">
                <button className="log" onClick={openModal}>
                    Add Product
                </button>
                {isModalOpen && <AddProduct closeModal={closeModal} />}
            </div>
            <div className='charts'>
                <div className='line-chart'>
                    <RenderLineChart />
                </div>
                <div className='line-chart'>
                    <RenderBarChart />
                </div>
            </div>
            <div className="dashboard">

                <div className='product-table'>
                    <h2>Product Management</h2>
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
                            {products.slice(0., 10).map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>
                                        <img
                                            width="40px"
                                            height="40px"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <DeleteIcon
                                            onClick={() => handleDelete(product.id)}
                                            sx={{ cursor: 'pointer', color: '#d65555' }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='product-table'>
                    <h2>Cart Items</h2>
                    {cartItems && cartItems.length > 0 ? (
                        <table className="dashboard-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price ($)</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((cartItem) => (
                                    <tr key={cartItem.product.id}>
                                        <td>{cartItem.product.id}</td>
                                        <td>
                                            <img
                                                width="40px"
                                                height="40px"
                                                src={cartItem.product.image}
                                                alt={cartItem.product.name}
                                            />
                                        </td>
                                        <td>{cartItem.product.name}</td>
                                        <td>{cartItem.product.category}</td>
                                        <td>{cartItem.product.price}</td>
                                        <td>{cartItem.quantity}</td>
                                        <td><RemoveCircleOutlineIcon onClick={() => removeFromCart(cartItem.product)} sx={{ cursor: 'pointer', color: '#d65555' }}></RemoveCircleOutlineIcon></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h4>No Cart Items</h4>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
