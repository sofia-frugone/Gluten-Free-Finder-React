import { useState } from "react";
import CardList from "./card/CardList";
import SearchBar from "./filters/SearchBar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("https://gluten-free-finder-api.herokuapp.com/posts").then((res) => {
        return res.data;
      }),
  });

  const [keyword, setKeyword] = useState("");

  return (
    <div className="home">
      <SearchBar keyword={keyword} onChange={setKeyword} />

      {error && <div>{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {data && data.posts && !isLoading && (
        <CardList
          card={data.posts.filter((p) => {
            return p.restaurant_name.includes(keyword);
          })}
        />
      )}
    </div>
  );
};

export default Home;
