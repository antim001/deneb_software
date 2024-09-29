import React, { useState, useEffect } from 'react';

// Sample user data; in a real application, you would fetch this from an API
const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Supplier' },
  { id: 3, name: 'Sam Johnson', email: 'sam@example.com', role: 'User' },
];

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch user data from an API
    setUsers(sampleUsers);
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-4'>Users</h1>
      <table className='min-w-full bg-white rounded-lg shadow-md'>
        <thead>
          <tr className='bg-gray-200 text-gray-600 text-left text-sm uppercase tracking-wider'>
            <th className='py-2 px-4'>Name</th>
            <th className='py-2 px-4'>Email</th>
            <th className='py-2 px-4'>Role</th>
            <th className='py-2 px-4'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className='border-b'>
              <td className='py-2 px-4'>{user.name}</td>
              <td className='py-2 px-4'>{user.email}</td>
              <td className='py-2 px-4'>{user.role}</td>
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

export default AllUsers;
