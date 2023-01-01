import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=10');
    const data = await res.json();
    console.log(data);

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    {
      name: 'Brand',
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Rating',
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: 'Product Image',
      selector: (row) => (
        <img
          className="mt-1"
          src={row.thumbnail}
          alt={row.title}
          width="100px"
        />
      ),
    },
  ];

  return (
    <div>
      {products.length > 0 && (
        <DataTable
          title="Procuts Summary"
          columns={columns}
          data={products}
          defaultSortFieldId
          pagination={5}
          // onRowClicked={handleRowClicked}
          highlightOnHover
        />
      )}
    </div>
  );
}
