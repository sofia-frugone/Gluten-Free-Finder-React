import { useState, useEffect } from "react";
import CardList from "./card/CardList";
import CuisineDropdown from "./filters/CuisineDropdown";
import SearchBar from "./filters/SearchBar";
import SearchButton from "./filters/SearchButton";
import SuburbSearch from "./filters/SuburbSearch";
import useFetch from "./useFetch";



const Home = () => {
  const { data: card, isPending, error } = useFetch('http://localhost:8000/card')

  return (  
    <div className="home">
      
      
      <SearchBar />
      <div className="search-filters">
        <CuisineDropdown />
        <SuburbSearch />
      </div>

      <SearchButton />
      { error && <div>{ error }</div> }
      { isPending && <div className="loading">Loading...</div>}
      {card && <CardList card={card}/>}
    </div>
  );
}
 
export default Home;