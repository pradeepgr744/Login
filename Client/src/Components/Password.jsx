import React from 'react'
import { NavLink } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from './Helper/validate'

const Password = () => {

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate:passwordValidate,
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
                <h1 className='text-center font-semibold text-3xl text-white mt-5'>Hello Again!</h1>
              </div>
              <div>
                <h1 className='text-center text-gray-300'>Explore More by connecting with us</h1>
              </div>
              <div className=' py-1 flex justify-center m-3'>
                <img src="avatar.svg" alt="avatar"
                  className='p-0.5 w-20 h-20 rounded-full bg-white shadow-xl shadow-gray-700' />
              </div>

              <div className='text-center'>
                <input {...formik.getFieldProps('password')} type="password" placeholder='Password' 
                  className='w-full rounded-full px-7 outline-none border-2 mt-5
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                />
                <br />
                <button type='submit'
                  className='w-full  flex justify-center bg-white rounded-full mt-5 py-2 items-center shadow-md hover:shadow-gray-700 font-semibold'
                >Login</button>
              </div>
              <div className='text-center mt-10 text-sm'>
                <span className=' text-gray-300 '>Forgot Password?<NavLink to='/recovery' className='text-gray-200 font-semibold'> Recover Now</NavLink></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Password