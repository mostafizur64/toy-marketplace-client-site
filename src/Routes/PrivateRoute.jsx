import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {
 
    const location =useLocation();
    const{user,loader}= useContext(AuthContext);
    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default PrivateRoute;