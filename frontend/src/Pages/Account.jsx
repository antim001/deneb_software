import React from 'react';

const Account = () => {
  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-4'>Account Page</h1>
      <p>Welcome to your account! Here you can manage your personal information, update your password, and view your activity logs.</p>

      {/* Add more account management features here */}
      
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-3'>Account Details</h2>
        <ul>
          <li><strong>Username:</strong> johndoe</li>
          <li><strong>Email:</strong> johndoe@example.com</li>
          <li><strong>Member Since:</strong> January 1, 2022</li>
        </ul>
      </div>

      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-3'>Account Actions</h2>
        <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700'>
          Update Information
        </button>
        <button className='bg-red-500 text-white p-2 rounded-md hover:bg-red-700 ml-4'>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;
