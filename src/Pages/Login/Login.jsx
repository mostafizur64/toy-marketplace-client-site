import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
    useTitle('login')
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));



    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-4">
            <div className="hero-content flex-col lg:flex-row-reverse justify-center md:items-center">
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl  h-[525px] bg-base-100 ">

                    <img className="rounded" src="https://img.freepik.com/premium-vector/flat-illustration-design-cybersecurity_9206-2585.jpg?w=740" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <h1 className="text-4xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value='Login' />
                                <p className='text-center mt-2'>New to Animal Toys <Link className='text-bold text-orange-600' to='/register'>Register</Link> </p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;