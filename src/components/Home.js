import { useState, useEffect } from "react";
import CardList from "./card/CardList";
import CuisineDropdown from "./filters/CuisineDropdown";
import SearchBar from "./filters/SearchBar";
import SearchButton from "./filters/SearchButton";
import SuburbSearch from "./filters/SuburbSearch";
import useFetch from "./useFetch";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";




const Home = () => {
  // const { data: card, isPending, error } = useFetch('http://localhost:8000/card')
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios.get('http://localhost:3000/posts').then(res => {
        return res.data
      }
        
      )
  })

  const [keyword, setKeyword] = useState("")
  console.log(keyword);

  return (  
    <div className="home">
      
      
      <SearchBar keyword={keyword} onChange={setKeyword}/>
      <div className="search-filters">
        <CuisineDropdown />
        <SuburbSearch />
      </div>

      <SearchButton />
      { error && <div>{ error }</div> }
      { isLoading && <div className="loading">Loading...</div>}
      { data && data.posts && !isLoading && <CardList card={data.posts.filter((p) => {
        return p.restaurant_name.includes(keyword)
      })}/>}
    </div>
  );
}
 
export default Home;