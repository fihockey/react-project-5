import { useContext } from 'react'
import './searchbox.scss'
import { BeerContext } from '../../context/BeerContext';


const SearchBox = () => {
    const { setText } = useContext(BeerContext);

    return (
        <input className="beer_search" type="text" onChange={event => setText(event.target.value)} />
    )


}

export default SearchBox