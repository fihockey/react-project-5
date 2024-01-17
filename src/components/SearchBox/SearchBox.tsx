import { ChangeEventHandler } from "react";
import "./searchbox.scss";

type SearchBoxProps = {
  handleSearchQuery: ChangeEventHandler<HTMLInputElement>;
  searchQuery: string;
};

const SearchBox = ({ handleSearchQuery, searchQuery }: SearchBoxProps) => {
  return (
    <input
      placeholder="Search those beers..."
      className="beer_search"
      type="text"
      value={searchQuery}
      onChange={handleSearchQuery}
    />
  );
};

export default SearchBox;
