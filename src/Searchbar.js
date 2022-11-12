const Searchbar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">
                Start typing or use the restaurant filters...
            </span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Start typing or use the restaurant filters..."
            name="s" 
        />
    </form>
);


 
export default Searchbar;