import React from 'react'
import { NavLink } from "react-router-dom"
import { Toaster } from 'react-hot-toast'


const Recovery = () => {


  return (
    <>
      <div className='h-screen flex justify-center items-center bg-bgimg bg-no-repeat bg-cover bg-center bg-fixed'>
        <Toaster position='top-center' reverseOrder='false'></Toaster>
        <div className='w-[400px] h-[400px] border-2 border-gray-300 rounded-3xl '>
          <div className=' flex justify-center blur-0  items-center backdrop-blur-sm rounded-3xl '>
            <form className=' py-1 w-[300px] h-[380px]' onSubmit={formik.handleSubmit}>
              <div>
                <h1 className='text-center font-semibold text-3xl text-white mt-5'>Recovery</h1>
              </div>
              <div>
                <h1 className='text-center text-gray-300'>Enter OTP to recover password</h1>
              </div>
           
              <div className='text-center mt-10'>
               <span className='text-xs text-gray-300'>Enter 6 digit OTP sent to your email address</span>
              </div>
              <div className='text-center'>
                <input {...formik.getFieldProps('password')} type="password" placeholder='OTP'
                  className='w-full rounded-full px-7 outline-none border-2 
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                />
                <br />
                <button type='submit'
                  className='w-full  flex justify-center bg-white rounded-full mt-5 py-2 items-center shadow-md hover:shadow-gray-700 font-semibold'
                >Recover</button>
              </div>
              <div className='text-center  text-sm mt-3'>
                <span className=' text-gray-300 '>Can't get OTP?<NavLink to='/Resend' className='text-gray-200 font-semibold'> Resend</NavLink></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Recovery