import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    quantity: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to the backend/API
    console.log('Product Submitted:', formData);

    // Reset form after submission
    setFormData({
      name: '',
      brand: '',
      price: '',
      description: '',
      quantity: ''
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="brand">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter brand name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter price"
            step="0.01"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter quantity"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
