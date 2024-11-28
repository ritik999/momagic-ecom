import { Button, CustomFlowbiteTheme, Flowbite, TextInput } from 'flowbite-react'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi'

const helpGridData = ['Register / Login',
  'Delivery & Charges',
  'Payment Options',
  "FAQ's",
  'Returns Policy',
  'Track My Order',
  'Buy in Bulk']


const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
    },
  },
};


const Footer = () => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className='mt-20'>
        <div className='grid grid-cols-5 p-5 text-white bg-black gap-10'>
          <div className='col-span-2 text-justify'>
            <h1 className='mb-5 font-semibold text-2xl'>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi quia maiores! Accusamus eaque doloribus quas, expedita non ab optio laboriosam sequi tempora repellat est a accusantium sint quo dicta totam, recusandae maiores aliquid architecto perferendis similique enim? Quam eos numquam assumenda voluptas quisquam autem veniam illum. Sed, deserunt aut.</p>
          </div>
          <div className='col-span-1 pl-10'>
            <h1 className='mb-5 font-semibold text-2xl'>HERE TO HELP</h1>
            <div className='text-left '>
              {helpGridData.map((ele, i) => (
                <h1>{ele}</h1>
              ))}
            </div>
          </div>
          <div className='col-span-2'>
            <div className='rounded-lg shadow-sm shadow-white p-4 bg-neutral-800'>
              <h1 className='text-2xl text-left mb-4 font-semibold'>NEWSLETTER SIGN UP</h1>
              <h1 className='text-left'>Get the latest deals and more</h1>
              <div className='flex'>
                <div className='flex w-full items-center bg-white px-7 '>
                  <HiMail color='black' />
                  <input className='text-black border-none focus:outline-none focus:border-none flex-1 bg-transparent px-5 py-2 placeholder:text-black' type="text" placeholder='Enter your email address' />
                </div>
                <button className='bg-cyan-800 p-2 text-black font-semibold rounded-r-md hover:text-white'>SUSCRIBE</button>
              </div>
            </div>
            <div className='mt-6'>
              <h1 className='text-white font-semibold text-2xl mt-5'>CONNNECT WITH US</h1>
              <div className='flex gap-10 mt-4 '>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
                <FaYoutube size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flowbite>
  )
}

export default Footer