import { useState } from 'react';
import './App.scss'
import CardList from './components/Main/CardList'
import Navbar from './components/NavBar/NavBar'
import { BeerContext } from './context/BeerContext'

function App() {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("")
  

  return (
    <div className="title_container">
    <h1>Bonkers For Beer</h1>
    <div className="app_container">
      <BeerContext.Provider value={{ text, setText, filter, setFilter }}>
        <Navbar/>
        <CardList />
      </BeerContext.Provider>
    </div>
    </div>
  )
}

export default App

