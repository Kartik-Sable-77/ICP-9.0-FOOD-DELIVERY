import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../cartSlice';

function Cart({name,id,price,image,qty}) {
    let dispatch=useDispatch()
  return (
    <div className='w-full h-[120px] p-2 shadow-md flex justify-between'>
      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[50%] h-full overflow-hidden rounded-md '><img src={image} className='object-cover rounded-md' /> </div>
        <div className='w-[40] h-full flex flex-col gap-3'>
        <div className='text-lg text-gray-500 font-semibold'>{name}</div>
        <div className="w-[110px] h-[40px] flex items-center rounded-lg bg-slate-200 shadow-md font-semibold border-2 border-orange-600 text-xl hover:bg-slate-100">
  <button className="w-[30%] h-full flex justify-center items-center bg-white text-orange-500 hover:bg-orange-100 transition rounded-t-md rounded-bl-md"onClick={()=>{dispatch(DecrementQty(id))}}>-</button>
  <span className="w-[40%] h-full flex justify-center items-center bg-slate-300 text-gray-500 font-semibold">{qty}</span>
  <button className="w-[30%] h-full flex justify-center items-center bg-white text-orange-500 hover:bg-orange-100 transition rounded-tr-md rounded-br-md" onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
</div>

</div>
        </div>

      <div>
       <div className='flex flex-col justify-start items-end gap-7'><span className='text-xl text-gray-500 font-semibold'>Rs {price}/-</span>
       <MdDeleteOutline className='w-[30px] h-[30px] text-red-700 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
       </div>
      </div>
    </div>
  )
}

export default Cart
