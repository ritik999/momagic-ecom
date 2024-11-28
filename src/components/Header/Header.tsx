import React, { useCallback, useState } from 'react'
import Select from '../DropdownSelecter/Select'
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
// import { Dropdown } from 'flowbite-react';
import { HiCog, HiCurrencyDollar, HiLogin, HiLogout, HiViewGrid } from 'react-icons/hi';
import { Dropdown } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Drawers from '../Drawer/Drawers';
import { useAuthContext } from '../../context/AuthContext';
import { useLogout } from '../../hooks/useLogout';



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { authUser }: any = useAuthContext();
  const {loading,logout}=useLogout();
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  }

  // const handleDrawer=useCallback(()=>{
  //   setIsOpen(!isOpen);
  // },[])

  const navigate = useNavigate()

  return (
    <div className='h-16 w-full p-4 border-b-2 shadow-md flex items-center bg-white sticky top-0 z-20'>
      <div className='w-full justify-between grid grid-cols-6'>
        <div className=' flex items-center'>
          <h1 className='text-3xl cursor-pointer' onClick={() => navigate('/')}>Logo</h1>
        </div>
        <div className='col-span-3'>
          <div className='border-2 w-[100%] flex items-center'>
            <Select noOfCategories={15} />
            <input className='w-full border-none outline-none' type="text" name="search" placeholder='search...' />
          </div>
        </div>
        <div className='col-span-2 flex items-center gap-6 justify-end'>
          <div className='flex items-center gap-2'>
            <FaRegHeart />
            <span>Wishlist</span>
          </div>
          <div onClick={() => handleDrawer()} className='flex items-center gap-2 cursor-pointer'>
            <FaShoppingCart />
            <span>Cart</span>
          </div>
          <div className='flex items-center gap-2'>
            <Dropdown className='z-10' label={<DropdownLable />} inline>

              {authUser ? (
                <>
                  <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
                  </Dropdown.Header>
                  <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
                  <Dropdown.Item icon={HiCog}>Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item icon={HiLogout} onClick={()=>logout()}>Log out</Dropdown.Item>
                </>
              ):(
                <Dropdown.Item icon={HiLogin} onClick={()=>navigate('/login')}>Log in</Dropdown.Item>
              )}

            </Dropdown>
          </div>
        </div>
      </div>
      <Drawers isOpen={isOpen} handleDrawer={handleDrawer} />
    </div>
  )
}


const DropdownLable = () => {
  return (
    <>
      <div className='flex items-center gap-1'>
        <IoPersonOutline />
        <span>Account</span>
      </div>
    </>
  )
}

export default Header