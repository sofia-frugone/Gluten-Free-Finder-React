import { useQuery } from "@tanstack/react-query";

function CuisineDropdown() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["cuisineData"],
    queryFn: () =>
      axios.get("http://localhost:3000/cuisines").then((res) => {
        return res.data;
      }),
  });

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {data && data.posts && !isLoading && (
        <select value={cuisine.name}>
            
        </select>


       )}
    </div>
  );
}

export default CuisineDropdown;
