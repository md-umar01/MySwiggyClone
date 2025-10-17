import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Category from './Components/Category'
import TopRest from './Components/TopRest'
import OnlineDelivery from './Components/OnlineDelivery'

function App() {
  return (
    <>
     <Header/>
     <Category/>
     <TopRest/>
     <OnlineDelivery/>
    </>
  )
}

export default App