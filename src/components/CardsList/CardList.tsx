import { useEffect, useState } from "react";
import { Beer } from "../Data/types";
import Card from "../Card/Card";
import "./cardlist.scss";

type CardListProps = {
  highABV: boolean;
  acidic: boolean;
  classicRange: boolean;
  searchQuery: string;
};

const CardList = ({
  highABV,
  acidic,
  classicRange,
  searchQuery,
}: CardListProps) => {
  const [beers, setBeers] = useState<Beer[]>();

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers?page=2&per_page=80`;
    const res = await fetch(url);
    const data: Beer[] = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const filterBeers = (beers?: Beer[]) => {
    let filterdBeers = beers;
    if (highABV == true) {
      filterdBeers = filterdBeers?.filter((beer) => beer.abv > 6.0);
    }

    if (acidic == true) {
      filterdBeers = filterdBeers?.filter((beer) => beer.ph < 4);
    }

    if (classicRange == true) {
      filterdBeers = filterdBeers?.filter(
        (beer) => beer.ph > 4 && beer.abv < 6.0
      );
    }

    return filterdBeers?.filter((beer) =>
      beer.name.toLowerCase().includes(searchQuery)
    );
  };

  return (
    <div className="cardlist_container">
      {filterBeers(beers)?.map((beer) => {
        {
          return <Card beer={beer} />;
        }
      })}
    </div>
  );
};

export default CardList;
