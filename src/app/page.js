"use client";
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/Cartslice';

const Homepage = () => {
  const [products ,setproducts]=useState([])
  const dispatch =useDispatch();

  const getproducts =async()=>{
    const res =await fetch("https://fakestoreapi.com/products");
    const data =await res.json();
    setproducts(data);
  }

  const handleAdd =(product)=>{
     dispatch(add(product));
  }



  useEffect(()=>{
   getproducts();
  },[])

  return (
    <div className='grid grid-cols-4 gap-6 p-6'>
      {products.map((product) => (
        <div key={product.id} className='card bg-white p-8 text-center rounded-lg'>
          <img src={product.image} alt='img' className='h-20 mx-auto' />
          <h4 className='text-lg font-bold mt-4'>{product.title}</h4>
          <h5 className='mt-2'>{product.price}</h5>
          <button className='bg-blue-500 text-white px-4 py-2 rounded font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700' onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Homepage