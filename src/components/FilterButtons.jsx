const FilterButtons = ({ activeFilter, onFilterChange, theme }) => {
    const filters = ["All", "Active", "Inactive"];

    return (
        <div className="filter-buttons">
        {filters.map((filter) => (
            <button
            key={filter}
            className={`filter-btn ${
                activeFilter === filter ? "active" : `inactive ${theme}`
            }`}
            onClick={() => onFilterChange(filter)}
            >
            {filter}
            </button>
        ))}
        </div>
    );
};

export default FilterButtons;
