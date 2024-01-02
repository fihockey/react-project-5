import { useEffect, useState } from 'react';
import { Beer } from '../Data/types';
import Card from './Card'
import './cardlist.scss'


type CardListProps = {
    highABV: boolean
    acidic: boolean
    classicRange: boolean
}

const CardList = ({highABV, acidic, classicRange}: CardListProps) => {
    const [ text ] = useState("");

    const [ beers, setBeers ] = useState<Beer[]>()

    

    const getBeers = async () => {
        const url = `https://api.punkapi.com/v2/beers?page=2&per_page=80`;
        const res = await fetch(url);
        const data: Beer[] = await res.json();
        setBeers(data);
    };

        useEffect(()=> {
            getBeers()
        }, [])

        const filterBeers = (beers?: Beer[]) => {
    
            if (highABV == true) {
                return beers?.filter((beer) => beer.abv > 6.0) 
            }

            if (acidic == true) {
                return beers?.filter((beer) => beer.ph < 4)
            }

            if (classicRange == true) {
                return beers?.filter((beer) => beer.ph > 4 && beer.abv < 6.0)  
            }  
            
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