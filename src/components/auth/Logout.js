
function Logout() {
    localStorage.clear();
    window.location.href = '/';

    console.log("logout");


    



    return (
        <div>Logout</div>

    );

}

export default Logout;