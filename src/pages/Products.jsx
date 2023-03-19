import React from 'react'
import { Row } from 'react-bootstrap'
import SingleProduct from '../components/SingleProduct';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(res => setProducts(res.data.products))
    }, []);

  return (
    <Row className='mt-5 g-5'>
        
        {
            products.map((elem,index) => {
                return <SingleProduct  item={elem}  key={index}/>
            })
          
        }

    </Row>  
  )
}

export default Products