import React from 'react'
import { NavLink } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetpasswordValidation } from './Helper/validate'

const Reset = () => {

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: ''
    },
    validate:resetpasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  })

  return (
    <>
      <div className='h-screen flex justify-center items-center bg-bgimg bg-no-repeat bg-cover bg-center bg-fixed'>
        <Toaster position='top-center' reverseOrder='false'></Toaster>
        <div className='w-96 h-96 border-2 border-gray-300 rounded-3xl '>
          <div className=' flex justify-center blur-0  items-center backdrop-blur-sm rounded-3xl '>
            <form className=' py-1 w-80 h-80' onSubmit={formik.handleSubmit}>
              <div>
                <h1 className='text-center font-semibold text-3xl text-white mt-5'>Reset</h1>
              </div>
              <div>
                <h1 className='text-center text-gray-300'>Enter new password</h1>
              </div>
              
              <div className='text-center mt-10'>
                <input {...formik.getFieldProps('password')} type="password" placeholder='New Password' 
                  className='w-full rounded-full px-7 outline-none border-2 mt-5
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                />
                <input {...formik.getFieldProps('confirm_pwd')} type="password" placeholder='Confirm Password' 
                  className='w-full rounded-full px-7 outline-none border-2 mt-2
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                />
                <button type='submit'
                  className='w-full  flex justify-center bg-white rounded-full mt-7 py-2 items-center shadow-md hover:shadow-gray-700 font-semibold'
                >Reset</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reset