import './filters.scss';

interface FilterItemProps {
    name: string
    handleFilter: (name: string) => void
}

const FilterItem = ({ name, handleFilter }: FilterItemProps) => {

    return (
        <div>
            <input type="checkbox" onClick={() => handleFilter(name)} /> {name}
        </div>
    )
}

export default FilterItem