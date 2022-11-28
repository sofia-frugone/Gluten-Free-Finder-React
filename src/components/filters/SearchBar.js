import "./filters.css";

const SearchBar = ({ keyword, onChange }) => {
  return (
    <div className="search">
      <input
        key="search-bar"
        value={keyword}
        placeholder={"🔎 Start typing to search for restaurants..."}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
