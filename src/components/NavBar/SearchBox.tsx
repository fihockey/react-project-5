import { useContext } from 'react'
import './searchbox.scss'
import { BeerContext } from '../../context/BeerContext';


const SearchBox = () => {
    const { setText } = useContext(BeerContext);

    return (
        <input placeholder="Search those beers..." className="beer_search" type="text" onChange={event => setText(event.target.value)} />
    )


}

export default SearchBox