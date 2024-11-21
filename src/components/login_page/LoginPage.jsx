import bgloginpage from "../../assets/img/login_page.jpg"
import EmailPassword from "./EmailPasword";
import BottomText from "./BottomText";

const LoginPage = () => {
    return ( 
        <div style={{ backgroundImage: `url(${bgloginpage})`}} className="min-h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed">
            <EmailPassword/>
            <BottomText/>
        </div>
     );
}
 
export default LoginPage;