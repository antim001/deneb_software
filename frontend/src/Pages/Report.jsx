import React from 'react';

const Report= () => {
  // Sample data for report sections
  const reports = [
    {
      title: "Monthly Sales",
      description: "A summary of sales data for the current month.",
      value: "$32,400",
    },
    {
      title: "New Users",
      description: "Total number of new users registered this month.",
      value: "1,230",
    },
    {
      title: "Inventory Alert",
      description: "Items with low stock levels that need restocking.",
      value: "15 items",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Reports</h1>
        <p className="text-gray-600 mb-8">Overview of key metrics and performance indicators.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700">{report.title}</h2>
              <p className="text-gray-500 mt-2 mb-4">{report.description}</p>
              <span className="text-2xl font-bold text-blue-600">{report.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
