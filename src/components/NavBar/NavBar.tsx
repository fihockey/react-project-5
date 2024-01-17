import { ChangeEventHandler } from "react";
import FilterList from "./Filters/FiltersList";
import SearchBox from "./SearchBox/SearchBox";
import "./navbar.scss";

type NavBarProps = {
  handleHighABVFilter: () => void;
  handleAcidicFilter: () => void;
  handleClassicRangeFilter: () => void;
  handleSearchQuery: ChangeEventHandler<HTMLInputElement>;
  searchQuery: string;
};

const Navbar = ({
  handleHighABVFilter,
  handleAcidicFilter,
  handleClassicRangeFilter,
  handleSearchQuery,
  searchQuery,
}: NavBarProps) => {
  return (
    <div className="navbar_container">
      <SearchBox
        handleSearchQuery={handleSearchQuery}
        searchQuery={searchQuery}
      />
      <FilterList
        handleHighABVFilter={handleHighABVFilter}
        handleAcidicFilter={handleAcidicFilter}
        handleClassicRangeFilter={handleClassicRangeFilter}
      />
    </div>
  );
};

export default Navbar;
