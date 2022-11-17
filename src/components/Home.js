import { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import useFetch from "./useFetch";



const Home = () => {
  const { data: card, isPending, error } = useFetch('http://localhost:8000/card')

  
    
  return (  
    <div className="home">
      <SearchBar />
      { error && <div>{ error }</div> }
      { isPending && <div className="loading">Loading...</div>}
      {card && <CardList card={card}/>}
    </div>
  );
}
 
export default Home;