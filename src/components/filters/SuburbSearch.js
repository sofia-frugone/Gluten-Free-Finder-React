import "./filters.css"

const SuburbSearch = ({keyword, onChange}) => {
    
    return (
        <div className="suburb-search">
            <input key="suburb-search" value={keyword} placeholder={"Enter your suburb (eg. Green Hill)"} onChange={(e) => onChange(e.target.value)}/>
        </div>
      
    );
  }
  
  export default SuburbSearch;