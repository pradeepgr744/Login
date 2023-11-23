import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { profileValidate } from './Helper/validate'
import convertToBase64 from './Helper/Convert'

const Profile = () => {

  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      mobile: '',
      address: '',
    },
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || '' })
      console.log(values)
    }
  })

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64)
  }


  return (
    <>
      <div className='h-screen flex justify-center items-center bg-bgimg bg-no-repeat bg-cover bg-center bg-fixed'>
        <Toaster position='top-center' reverseOrder='false'></Toaster>
        <div className='border-2 border-gray-300 rounded-3xl '>
          <div className=' flex justify-center blur-0  items-center backdrop-blur-sm rounded-3xl '>
            <form className=' my-5 mx-5 w-5/6 h-5/6' onSubmit={formik.handleSubmit}>
              <div>
                <h1 className='text-center font-semibold text-3xl text-white mt-5'>Profile</h1>
              </div>
              <div>
                <h1 className='text-center text-gray-300'>You can update the details.</h1>
              </div>
              <div className=' py-1 flex justify-center m-3'>
                <label htmlFor='profile'>
                  <img src={file || 'addavatar.svg'} alt="avatar"
                    className='p-0.5 w-20 h-20 rounded-full bg-white shadow-xl shadow-gray-700 cursor-pointer' />
                </label>
                <input onChange={onUpload} type='file' id='profile' name='profile'
                  className='hidden cursor-pointer'
                />
              </div>

              <div className='flex justify-center'>
                <div>
                  <div className='flex w-full gap-10'>
                    <input {...formik.getFieldProps('fname')} type="text" placeholder='FirstName'
                      className='w-full rounded-full px-3 outline-none border-2 mt-5
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                    />
                    <input {...formik.getFieldProps('lname')} type="text" placeholder='LastName'
                      className='w-full rounded-full px-3 outline-none border-2 mt-5
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                    />
                  </div>
                  <div className='flex w-full gap-10'>
                    <input {...formik.getFieldProps('mobile')} type="number" placeholder='Mobile No.'
                      className='w-full rounded-full px-3 outline-none border-2 mt-5
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                    />
                    <input {...formik.getFieldProps('email')} type="email" placeholder='Email'
                      className='w-full rounded-full px-3 outline-none border-2 mt-5
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                    />
                  </div>
                  <div className=''>
                    <input {...formik.getFieldProps('address')} type="txt" placeholder='Address'
                      className='w-full rounded-full px-3 outline-none border-2 mt-5
                      py-2 border-gray-300 bg-transparent caret-white text-gray-300 '
                    />

                    <br />
                    <button type='submit'
                      className='w-full  flex justify-center bg-white rounded-full mt-5 py-2 items-center shadow-md hover:shadow-gray-700 font-semibold'
                    >Update</button>
                  </div>
                </div>
              </div>
              <div className='text-center mt-10 text-sm'>
                <span className=' text-gray-300 '>Come back later?<NavLink to='../' className='text-gray-200 font-semibold'> Logout</NavLink></span>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}


export default Profile