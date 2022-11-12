// Suburb searchbar

const Searchbar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">
                Enter your suburb (eg. Green Hill)
            </span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Enter your suburb (eg. Green Hill)"
            name="s" 
        />
    </form>
);


 
export default Searchbar;