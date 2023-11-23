import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-center bg-bgimg bg-no-repeat bg-cover bg-center bg-fixed'>
        <div className='w-96 h-96 border-2 border-gray-300 rounded-3xl '>
          <div className=' flex justify-center blur-0  items-center backdrop-blur-sm rounded-3xl '>
            <form className=' py-1 w-80 h-80 flex justify-center items-center' >
              <div >
                <h1 className='text-center font-semibold text-3xl text-white'>PageNotFound...!</h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound