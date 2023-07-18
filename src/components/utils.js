export const productsData = [
    {
        id: 1,
        name: 'Product 1',
        price: 10,
        category: 'headphone',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 20,
        category: 'camera',

        image: 'https://khawajaphotos.pk/wp-content/uploads/2018/09/17_k432_frontslantleft_ef-s18-55_iii_1_3_x700.jpg',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 30,
        category: 'headphone',
        image: 'https://oneclickshopping.pk/wp-content/uploads/2022/03/Untitled-1_2.jpg',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 24,
        category: 'camera',
        image: 'https://instax.com/common2/img/camera/camera_12_01.png',
    },
    {
        id: 5,
        name: 'Product 5',
        price: 60,
        category: 'headphone',
        image: 'https://m.media-amazon.com/images/I/51+mpZLIYuS._AC_SY355_.jpg',
    },
    {
        id: 6,
        name: 'Product 6',
        price: 15,
        category: 'headphone',
        image: 'https://www.boat-lifestyle.com/cdn/shop/products/1_5.png?v=1655534211',
    },
    {
        id: 7,
        name: 'Product 7',
        price: 35,
        category: 'camera',
        image: 'https://asset.fujifilm.com/www/us/files/styles/600x400/public/2020-10/eb6d53bba4e3c06d44459e309020e6f2/instax_mini7plus_Lavender_camera_home.png?itok=_ksOT9RH',
    },
    {
        id: 8,
        name: 'Product 8',
        price: 18,
        category: 'camera',
        image: 'https://static3.webx.pk/files/4679/Images/Thumbnails-Large/copy-1677725157-img-1945317-4679-0-180423083959543.jpg',
    },
    {
        id: 9,
        name: 'Product 9',
        price: 28,
        category: 'headphone',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    {
        id: 10,
        name: 'Product 10',
        price: 55,
        category: 'headphone',
        image: 'https://www.boat-lifestyle.com/cdn/shop/products/1_5.png?v=1655534211',
    },
    {
        id: 11,
        name: 'Product 1',
        price: 10,
        category: 'headphone',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    {
        id: 12,
        name: 'Product 2',
        price: 20,
        category: 'camera',

        image: 'https://khawajaphotos.pk/wp-content/uploads/2018/09/17_k432_frontslantleft_ef-s18-55_iii_1_3_x700.jpg',
    },
    {
        id: 13,
        name: 'Product 3',
        price: 30,
        category: 'headphone',
        image: 'https://oneclickshopping.pk/wp-content/uploads/2022/03/Untitled-1_2.jpg',
    },
    {
        id: 14,
        name: 'Product 4',
        price: 24,
        category: 'camera',
        image: 'https://instax.com/common2/img/camera/camera_12_01.png',
    },
    {
        id: 15,
        name: 'Product 5',
        price: 60,
        category: 'headphone',
        image: 'https://m.media-amazon.com/images/I/51+mpZLIYuS._AC_SY355_.jpg',
    },
    {
        id: 16,
        name: 'Product 6',
        price: 15,
        category: 'headphone',
        image: 'https://www.boat-lifestyle.com/cdn/shop/products/1_5.png?v=1655534211',
    },
    {
        id: 17,
        name: 'Product 7',
        price: 35,
        category: 'camera',
        image: 'https://asset.fujifilm.com/www/us/files/styles/600x400/public/2020-10/eb6d53bba4e3c06d44459e309020e6f2/instax_mini7plus_Lavender_camera_home.png?itok=_ksOT9RH',
    },
    {
        id: 18,
        name: 'Product 8',
        price: 18,
        category: 'camera',
        image: 'https://static3.webx.pk/files/4679/Images/Thumbnails-Large/copy-1677725157-img-1945317-4679-0-180423083959543.jpg',
    },
    {
        id: 19,
        name: 'Product 9',
        price: 28,
        category: 'headphone',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    {
        id: 20,
        name: 'Product 10',
        price: 55,
        category: 'headphone',
        image: 'https://www.boat-lifestyle.com/cdn/shop/products/1_5.png?v=1655534211',
    },

];
export const handleFilter = (e, setFilter, productsData) => {
    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        product.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilter(filteredProducts);
};
export const filterCamera = (setFilter) => {
    const filteredProducts = productsData.filter((product) =>
        product.category === "camera"
    );
    setFilter(filteredProducts);
};
export const filterheadphone = (setFilter) => {
    const filteredProducts = productsData.filter((product) =>
        product.category === "headphone"
    );
    setFilter(filteredProducts);
};
export const filterBelow30 = (setFilter) => {
    const filteredProducts = productsData.filter((product) =>
        product.price <= "20"
    );
    setFilter(filteredProducts);
}