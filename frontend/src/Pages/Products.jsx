import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
// Sample product data; in a real application, you would fetch this from an API
const sampleProducts = [
  { id: 1, name: 'Aspirin', price: '$10.00', stock: 100 },
  { id: 2, name: 'Ibuprofen', price: '$15.00', stock: 50 },
  { id: 3, name: 'Acetaminophen', price: '$8.00', stock: 200 },
];

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch product data from an API
    setProducts(sampleProducts);
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-4'>Products</h1>
      <div className='flex justify-end mb-4'>
       <Link to='/addproduct'> <h2 className='btn bg-purple-950 text-white font-medium'>Add Product</h2></Link>
      </div>

      <table className='min-w-full bg-white rounded-lg shadow-md'>
        <thead>
          <tr className='bg-gray-200 text-gray-600 text-left text-sm uppercase tracking-wider'>
            <th className='py-2 px-4'>Product Name</th>
            <th className='py-2 px-4'>Price</th>
            <th className='py-2 px-4'>Stock</th>
            <th className='py-2 px-4'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className='border-b'>
              <td className='py-2 px-4'>{product.name}</td>
              <td className='py-2 px-4'>{product.price}</td>
              <td className='py-2 px-4'>{product.stock}</td>
              <td className='py-2 px-4'>
                <button className='text-blue-500 hover:underline'>Edit</button>
                <button className='text-red-500 hover:underline ml-4'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
