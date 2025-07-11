import React, { useState } from 'react';
import { data } from '../walmart_products';
import '../styles/Product_table.css';

function ProductTable(){
    const [search, setSearch] = useState('');


    return (
        <div className='product-table'>


            <div className='search-bar'>
                <input type="text" name='search' placeholder='Search Product' value={search} onChange={(e)=> setSearch(e.target.value)} />
            </div>


            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>In Stoke</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((product) => {
                        return search.toLowerCase() === '' ? product :
                        product.name.toLowerCase().includes(search);
                    }).map((product) => (
                        <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.in_stock}</td>
                        <td>{product.status}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;