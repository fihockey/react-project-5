// import { useContext } from "react";
import FilterItem from "./FilterItem";
import './filters.scss';


type FilterListProps = {
    handleHighABVFilter: () => void 
    handleAcidicFilter: () => void
    handleClassicRangeFilter: () => void
}

const FilterList = ({handleHighABVFilter, handleAcidicFilter, handleClassicRangeFilter} : FilterListProps) => {

    return (
        <div className="filterlist_container">
            {/* {filters.map((f) => 
                <FilterItem 
                    key={f} 
                    name={f} 
                    handleFilter={handleHighABVFilter || 
                    handleAcidicFilter || 
                    handleClassicRangeFilter} />
            )} */}
            <FilterItem name="High ABV (> 6.0%)" handleFilter={handleHighABVFilter}/>
            <FilterItem name="Acidic (ph < 4)" handleFilter={handleAcidicFilter}/>
            <FilterItem name="Classic Range" handleFilter={handleClassicRangeFilter}/>
        </div>
    )
}

export default FilterList