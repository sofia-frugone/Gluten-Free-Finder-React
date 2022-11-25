import { useState } from "react";
import CardList from "./card/CardList";
import SearchBar from "./filters/SearchBar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Dashboard = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["adminData"],
    queryFn: () =>
      axios.get("http://localhost:3000/admin", {
        headers: {
            Authorization: localStorage.getItem("jwt"),
        },
      }).then((res) => {
        console.log(res)
        return res.data;
        
      }),
  });

  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  return (
    <div className="home">
      <SearchBar keyword={keyword} onChange={setKeyword} />
      <div className="search-filters"></div>

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

export default Dashboard;