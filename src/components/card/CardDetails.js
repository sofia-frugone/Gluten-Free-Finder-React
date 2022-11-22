import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./cardoverview.css";

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
    <center>
      <div className="card-details">
        {error && <div>{error}</div>}
        {isLoading && <div className="loading">Loading...</div>}
        {data && !isLoading && (
          
          <div className="card-content">
            
            <h3>{data.restaurant_name}</h3>
            <p>{data.description}</p>
            <h3>Overview</h3>
            <p>
              {data.street_number} {data.street_name} {data.suburb}{" "}
              {data.postcode}
            </p>
            <p>{data.food_prep}</p>
          </div>
        )}
      </div>
    </center>
  );
};

export default CardDetails;
