import { useState } from 'react';
import './App.css'
import CardList from './components/Main/CardList'
import Navbar from './components/NavBar'
import { BeerContext } from './context/BeerContext'

function App() {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("")
  

  return (
    <div className="app_container">
      <BeerContext.Provider value={{ text, setText, filter, setFilter }}>
        <Navbar/>
        <CardList />
      </BeerContext.Provider>
    </div>
  )
}

export default App

