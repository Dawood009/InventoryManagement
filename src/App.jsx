import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { AddInventory } from './pages/AddInventory'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'



function App() {

  const getLocalItems =()=>{
    let list = localStorage.getItem('Items')
    if(list){
      return JSON.parse(localStorage.getItem('Items'))
    } else {
      return [
        {
          id: 1,
          item: "Apples",
          quantity: Number(20),
          unit: "Kg"
          
        },
        {
          id: 2,
          item: "Bananas",
          quantity: Number(25),
          unit: "Dozen"
          
        },
        {
          id: 3,
          item: 'Milk',
          quantity: Number(18),
          unit: 'Litre'
          
        }
      ]
    }
  }

  const [items,setItems] = useState(getLocalItems());

  useEffect(()=>{
    localStorage.setItem('Items',JSON.stringify(items))
  },[items])
  

  return (
  <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home items={items} setItems={setItems}/>} />
      <Route path='/addinventory'  element={<AddInventory items={items} setItems={setItems}/>} />
      
    </Routes>
    </BrowserRouter>

  </div>

  

  
  
  )
}

export default App
