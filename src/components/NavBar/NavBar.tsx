import FilterList from './Filters/FiltersList';
import SearchBox from './SearchBox/SearchBox';
import './navbar.scss';

type NavBarProps = {
    handleHighABVFilter: () => void 
    handleAcidicFilter: () => void
    handleClassicRangeFilter: () => void
}


const Navbar = ({handleHighABVFilter, handleAcidicFilter, handleClassicRangeFilter} : NavBarProps) => {

    return (
        <div className="navbar_container">
            <SearchBox />
            <FilterList handleHighABVFilter={handleHighABVFilter}
            handleAcidicFilter={handleAcidicFilter}
            handleClassicRangeFilter={handleClassicRangeFilter}/>
        </div>
    )


}

export default Navbar