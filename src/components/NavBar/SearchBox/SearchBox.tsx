import './searchbox.scss'


type SearchBoxProps = {
    handleSearchQuery: () => void
    searchQuery: string
}

const SearchBox = ({handleSearchQuery, searchQuery} : SearchBoxProps) => {

    // const searchBeers = (beer: Beer[]) => {
    //     if (text == beer.name.toLowerCase().icluders(searchQuery.toLowerCase()))
    //     return beer.name.toLowerCase().icluders(searchQuery.toLowerCase()
    // }


    return (
        <input placeholder="Search those beers..." className="beer_search" type="text" value={searchQuery} onChange={handleSearchQuery}/>
    )


}

export default SearchBox

// onChange={event => setText(event.target.value)} 