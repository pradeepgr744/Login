import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import OtpInput from 'react-otp-input';


const Recovery = () => {

  const [otp, setOtp] = useState('');

  return (
    <>

      <div className='h-screen flex justify-center items-center bg-bgimg bg-no-repeat bg-cover bg-center bg-fixed'>
        <Toaster position='top-center' reverseOrder='false'></Toaster>
        <div className='w-96 h-96 border-2 border-gray-300 rounded-3xl '>
          <div className=' flex justify-center blur-0  items-center backdrop-blur-sm rounded-3xl '>
            <form className=' py-1 w-80 h-80' >
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
                <div className='flex justify-center m-3'>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props}
                      className=' rounded-md text-3xl mx-1 outline-none border-2 
                   border-gray-300 bg-transparent caret-white text-gray-300 '
                    />}
                  />
                </div>
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