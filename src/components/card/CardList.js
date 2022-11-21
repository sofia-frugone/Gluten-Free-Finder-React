import "./card.css"
import { Link } from 'react-router-dom'


const CardList = ({ card }) => {

  
    
    return (
        <div className="card-list">
          {card.map(card => (
              <div className="card-preview" key={card.id} >
                <img src="./placeholder.png" alt="placholder"/>
                 <h2>{ card.restaurant_name }</h2>
                 <p>{ card.description }</p>
                 <Link to= {`/card/${card.id}`}><button>View Details</button></Link>
              </div>
            ))}
        </div>  
    );
}
 
export default CardList;