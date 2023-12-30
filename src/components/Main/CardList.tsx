import { useContext, useEffect, useState } from 'react';
import { Beer } from '../Data/types';
import Card from './Card'
import './cardlist.scss'
import { BeerContext } from '../../context/BeerContext';

const CardList = () => {
    const { text, filter } = useContext(BeerContext);

    const [beers, setBeers] = useState<Beer[]>()

    const getBeers = async () => {
        const url = `https://api.punkapi.com/v2/beers`;
        const res = await fetch(url);
        const data: Beer[] = await res.json();
        setBeers(data);
    };

        useEffect(()=> {
            getBeers()
        }, [])

        const filterBeers = (beers?: Beer[]) => {
            if (filter === 'High ABV (> 6.0%)') return beers?.filter((beer) => beer.abv > 6.0)

            if (filter === 'Acidic (ph < 4)') return beers?.filter((beer) => beer.ph < 4)

            if (filter === 'Classic Range') beers?.filter((beer) => beer.ph > 4 && beer.abv < 6.0)

            return beers
        }
    
    return (
        <div className="cardlist_container">
            {filterBeers(beers)?.map((beer) => {
             if (text == "" || beer?.name?.toLowerCase().includes(text.toLowerCase())) {
                return (
                    <Card beer={beer} />
                );
             }
            })}
         
        </div>
    )


}

export default CardList