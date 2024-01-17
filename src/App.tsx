import { ChangeEvent, useState } from "react";
import "./App.scss";
import CardList from "./components/CardsList/CardList";
import Navbar from "./components/NavBar/NavBar";

function App() {
  const [highABV, setHighABV] = useState(false);
  const [acidic, setAcidic] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleHighABVFilter = () => {
    setHighABV(!highABV);
  };
  const handleAcidicFilter = () => {
    setAcidic(!acidic);
  };
  const handleClassicRangeFilter = () => {
    setClassicRange(!classicRange);
  };

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchQuery(cleanInput);
  };

  return (
    <div className="title_container">
      <h1>Bonkers For Beer</h1>
      <div className="app_container">
        <Navbar
          handleHighABVFilter={handleHighABVFilter}
          handleAcidicFilter={handleAcidicFilter}
          handleClassicRangeFilter={handleClassicRangeFilter}
          handleSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
        />
        <CardList
          highABV={highABV}
          acidic={acidic}
          classicRange={classicRange}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}

export default App;
