import React from 'react'
import { IoRadioButtonOn } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { AddItem } from '../cartSlice';
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {
  let dispatch=useDispatch()
  return (
    <div className='w-[240px] h-[350px] bg-white p-3 rounded-md flex flex-col gap-3 shadow-md hover:scale-105 transition-all'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-md'>
        <img src={image} className='object-cover' />
      </div>

      <div className='text-xl font-semibold'>{name}</div>

      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-semibold text-gray-500'>Rs {price}/-</div>
        <div className={`flex justify-center items-center gap-2 text-lg font-semibold 
          ${type === "Non_Veg" ? "text-red-600" : "text-green-600"}`}>
          <IoRadioButtonOn /> <span>{type}</span>
        </div>
      </div>

      <button className='w-full h-[12%] p-2 bg-orange-400 rounded-lg text-gray-800 hover:bg-orange-500 hover:text-white transition-all'onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image, qty:1})); toast.success("Item Added") }}>
        Add to Cart
      </button>
    </div>
  )
}

export default Card;
