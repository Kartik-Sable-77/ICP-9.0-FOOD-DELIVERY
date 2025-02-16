import React, { useContext, useEffect } from 'react'
import { IoFastFood } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { dataContext } from '../UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';


function Nav() {
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)

  useEffect(()=>{
    let newlist=food_items.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()))
    setCate(newlist)
  },[input,setCate])
  let items=useSelector(state=>state.cart)

  
  return (
    <div className='w-full h-[100px] flex justify-between items-center md:px-8 px-3'>
      <div className='md:h-[60px] h-[40px] bg-white flex justify-center items-center rounded-md shadow-md px-3'>
      <IoFastFood className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] text-orange-400'/>
      <span className='text-[20px] px-1 text-red-700 font-semibold'>SnapEats</span>
      </div>
      <form className='w-[40%] md:h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%] h-[40px]'onSubmit={(e) => e.preventDefault()}>
      <IoIosSearch className='w-[30px] h-[30px] text-orange-400'/>
      <input type='text' placeholder='Search For Your Favourite Food...' className='w-[100%] outline-none text-[13px] md:text-[15px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      <div className='md:w-[60px] md:h-[60px] w-[40px] h-[40px] bg-white flex justify-center items-center rounded-md shadow-md relative cursor-pointer' onClick={()=>{setShowCart(true)}}>
      <IoCartOutline className='w-[30px] h-[30px] text-orange-400'/>
      <span className='absolute top-1 right-2 text-orange-400 font-semibold'>{items.length}</span>
      </div>
    </div>
  )
}

export default Nav
