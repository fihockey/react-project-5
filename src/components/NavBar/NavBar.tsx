import FilterList from './Filters/FiltersList';
import SearchBox from './SearchBox';
import './navbar.scss';



const Navbar = () => {

    return (
        <div className="navbar_container">
            <SearchBox />
            <FilterList />
        </div>
    )


}

export default Navbar