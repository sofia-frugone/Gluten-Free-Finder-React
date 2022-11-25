import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    
    navigate("/");
    

    console.log("logout");


    



    return (
        <div></div>

    );

}

export default Logout;