import { useState } from 'react'
import './App.css'
import { Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { ResponsiveAppBar, Politics, Sports, Bussiness, Hedge, Rockwell } from './components'

// Loaders
import { PoliticsLoader } from './components/Politics'
import { BussinessLoader } from './components/Bussiness'
import { SportsLoader } from './components/Sports'
import { HedgeLoader } from './components/Hedge'
import { RockwellLoader } from './components/Rockwell'

const router = createBrowserRouter(
  createRoutesFromElements(
    // Tree of Routes
    <Route path='/' element={<ResponsiveAppBar/>}>
      <Route index path='/' loader={PoliticsLoader} element={<Politics/>}/>
      <Route path='sports' loader={SportsLoader} element={<Sports/>}></Route>
      <Route path='bussiness' loader={BussinessLoader} element={<Bussiness/>}></Route>
      <Route path='hedge' loader={HedgeLoader} element={<Hedge/>}></Route>
      <Route path='rockwell' loader={RockwellLoader} element={<Rockwell/>}></Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
