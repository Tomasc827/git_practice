import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return ( 
        <>
        <div className="flex flex-col h-[100vh] justify-center items-center">
        <h1>It seems you are lost, would you like to go back to homepage? You can do so by clickling the button below</h1>
        <button onClick={() => navigate(-1)} className="super-btn">Return</button>
        </div>
        </>
     );
}
 
export default NotFound;