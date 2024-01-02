import { useState } from 'react';
import './App.scss'
import CardList from './components/Main/CardList'
import Navbar from './components/NavBar/NavBar'
// import { BeerContext } from './context/BeerContext'

function App() {
  // const [text, setText] = useState("");
  // const [filter, setFilter] = useState("")
  // value={{ text, setText, filter, setFilter }}
  const [highABV, setHighABV] = useState(false);
  const [acidic, setAcidic] = useState(false);
  const [classicRange, setClassicRange] = useState(false);

  const handleHighABVFilter = () => {
    setHighABV(!highABV);
  };
  const handleAcidicFilter = () => {
    setAcidic(!acidic);
  };

  const handleClassicRangeFilter = () => {
    setClassicRange(!classicRange);
  };

  
  return (
    <div className="title_container">
    <h1>Bonkers For Beer</h1>
    <div className="app_container">
        <Navbar handleHighABVFilter={handleHighABVFilter}
        handleAcidicFilter={handleAcidicFilter}
        handleClassicRangeFilter={handleClassicRangeFilter}
        />
        <CardList highABV={highABV}
        acidic={acidic}
        classicRange={classicRange}/>
    </div>
    </div>
  )
}

export default App

