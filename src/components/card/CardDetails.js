import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CardDetails = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoIndividualData"],
    queryFn: () =>
      axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {data && !isLoading && (
        <div className="card-details">
          <h3>{data.restaurant_name}</h3>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
