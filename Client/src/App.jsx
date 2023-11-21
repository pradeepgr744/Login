import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Username from './Components/Username'
import PageNotFound from './Components/PageNotFound'
import Password from './Components/Password'
import Recovery from './Components/Recovery'
import Register from './Components/Register'
import Reset from './Components/Reset'
import Profile from './Components/Profile'
import Layout from './Layout'





const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Username />} />
        <Route path='password' element={<Password />} />
        <Route path='recovery' element={<Recovery />} />
        <Route path='reset' element={<Reset />} />
        <Route path='profile' element={<Profile />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App