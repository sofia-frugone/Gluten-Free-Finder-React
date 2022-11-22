import "./filters.css"



const CuisineDropdown = () => {







    return (  
        <div className="cuisine-dropdown">
            <label> 
                <select>
                    <option value="italian">Italian</option>
                    <option value="modern australian">Modern Australian</option>
                    <option value="chinese">Chinese</option>
                    <option value="japanese">Japanese</option>
                </select>

            </label>
            

        </div>
        
    );
}
 
export default CuisineDropdown;