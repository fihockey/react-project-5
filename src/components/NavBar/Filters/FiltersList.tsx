import { useContext } from "react";
import { useState } from "react";
import FilterItem from "./FilterItem";
import './filters.scss';
import { BeerContext } from "../../../context/BeerContext";

const FilterList = () => {
    const { filter, setFilter } = useContext(BeerContext);

    
    const filters = [ 'High ABV (> 6.0%)', 'Classic Range', 'Acidic (ph < 4)']

    const handleFilter = (name : string) => {
        if (filter === name) setFilter('')

        setFilter(name)
    }

    return (
        <div className="filterlist_container">
            {filters.map((f) => 
                <FilterItem key={f} name={f} handleFilter={handleFilter} />
            )}
        </div>
    )
}

export default FilterList