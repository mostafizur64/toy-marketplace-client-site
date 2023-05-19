import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const navigate = useNavigate()
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate('/')

        })
        .catch(error=>console.log(error));
    }
   
    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline ">
                      G
            </button>
        </div>
    );
};

export default SocialLogin;