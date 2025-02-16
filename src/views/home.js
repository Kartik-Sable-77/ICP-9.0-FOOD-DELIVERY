import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../UserContext'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux'
import Cart from '../components/Cart'
import { toast } from 'react-toastify'

function Home() {
  let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext)

  function filter(category){
    if(category==="All"){
        setCate(food_items)
    }else{
        let newList=food_items.filter((item)=>(item.food_category===category.toLowerCase()))
        setCate(newList)
  } 
}
let items=useSelector(state=>state.cart)
let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
let deliveryFee=20;
let taxes=subtotal*0.5/100;
let total=Math.floor(subtotal+deliveryFee+taxes)


  return (
    <div className='bg-slate-100 w-full min-h-[100vh]'>
      <Nav />
      {!input?<div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
        {categories.map((item)=>
        {
        return <div className='md:w-[130px] w-[90px] md:h-[120px] h-[80px] bg-white flex flex-col items-center md:gap-4 md:p-5 p-3 md:text-[16px] font-semibold text-[12px] rounded-md text-gray-500 shadow-md hover:scale-105 hover:shadow-xl cursor-pointer transition-all'  onClick={()=>filter(item.name)}>
          {item.icon}
          {item.name}
        </div>
        }
        )}
      </div>: null}
      
      <div className='w-full flex flex-wrap gap-8 px-5 justify-center items-center pt-8 pb-8'>
        {cate.length>1? cate.map((item)=>(
          <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        )): <div className='text-gray-500 text-xl font-semibold'>No Dish Found</div>}
 
      </div>

      <div className={`md:w-[40vw] w-full h-[100vh] fixed top-0 right-0 bg-white shadow-lg p-7 transition-all duration-500 overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
          <header className='w-full flex justify-between items-center'>
            <span className='text-orange-500 font-semibold text-[24px]'>Order Items ..</span>
            <IoMdCloseCircleOutline className='font-semibold w-[30px] h-[30px] text-orange-400 cursor-pointer hover:text-orange-600' onClick={()=>setShowCart(false)}/>
          </header>
          {items.length > 0? <div>
          <div className='w-full mt-9 flex flex-col gap-6'>
          {items.map((item)=>(
          <Cart name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />))}
          </div>
            <div className='w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-3 p-8 border-b-2'>
              <div className='flex w-full justify-between items-center'>
                <span className='text-orange-500 font-semibold text-[18px]'>Subtotal:</span>
                <span className='text-gray-500 font-semibold text-[18px]'>Rs {subtotal}/-</span>
              </div>
              <div className='flex w-full justify-between items-center'>
              <span className='text-orange-500 font-semibold text-[18px]'>Delivery Fee:</span>
              <span className='text-gray-500 font-semibold text-[18px]'>Rs {deliveryFee}/-</span>
              </div>
              <div className='flex w-full justify-between items-center'>
                <span className='text-orange-500 font-semibold text-[18px]'>Taxes:</span>
                <span className='text-gray-500 font-semibold text-[18px]'>Rs {taxes}/-</span>
              </div>
            </div>
            <div className='flex w-full justify-between items-center mt-3'>
                <span className='text-red-600 font-semibold text-[20px]'>Total:</span>
                <span className='text-gray-600 font-semibold text-[20px]'>Rs {total}/-</span>
              </div>
              <button className='w-full h-[50px] text-lg bg-orange-400 rounded-md mt-4 text-gray-800 hover:bg-orange-500 hover:text-white transition-all' onClick={()=>(toast("Order Placed ✅"))}>Place Order</button>
          </div> :
          <div className='flex flex-col justify-center items-center'>
            <div className='text-2xl text-center text-orange-500 font-semibold mt-5'>Empty Cart !!</div>
            <span className='text-lg text-orange-300 font-semibold mt-3'>Fill cart to enjoy your food 😋</span>
            </div>
            }

      </div>
    </div>
  )
}

export default Home