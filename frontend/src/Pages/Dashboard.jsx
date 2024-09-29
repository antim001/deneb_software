import React from 'react';

const Dashboard = () => {
  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <p>Welcome to the Dashboard! Here you can view a summary of important information and metrics.</p>

      {/* Dashboard Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        <div className='bg-white p-4 rounded shadow'>
          <h2 className='text-xl font-semibold'>Total Sales</h2>
          <p className='text-3xl font-bold'>$10,000</p>
        </div>
        <div className='bg-white p-4 rounded shadow'>
          <h2 className='text-xl font-semibold'>Total Customers</h2>
          <p className='text-3xl font-bold'>300</p>
        </div>
        <div className='bg-white p-4 rounded shadow'>
          <h2 className='text-xl font-semibold'>Daily Profit</h2>
          <p className='text-3xl font-bold'>$500</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-3'>Recent Activity</h2>
        <ul className='bg-white p-4 rounded shadow'>
          <li className='border-b py-2'>Sale made: $200 for order #12345</li>
          <li className='border-b py-2'>New customer registered: Jane Doe</li>
          <li className='border-b py-2'>Sale made: $150 for order #12346</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
