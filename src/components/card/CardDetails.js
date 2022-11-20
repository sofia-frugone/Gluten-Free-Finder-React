import { useParams } from "react-router-dom";

const CardDetails = () => { 
    const { id } = useParams();
    return ( 
        <div className="card-details">
            <h2>Card Details - { id }</h2>

        </div>
     );
}
 
export default CardDetails;