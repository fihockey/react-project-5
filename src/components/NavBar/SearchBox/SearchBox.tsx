import './searchbox.scss'
// import { BeerContext } from '../../context/BeerContext';


const SearchBox = () => {
    // const { setText } = useContext(BeerContext);

    return (
        <input placeholder="Search those beers..." className="beer_search" type="text" />
    )


}

export default SearchBox

// onChange={event => setText(event.target.value)} 