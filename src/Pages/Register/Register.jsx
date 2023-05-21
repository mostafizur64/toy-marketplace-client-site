import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg';
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../Hooks/useTitle";


const Register = () => {
useTitle('Register')
const {createUser} = useContext(AuthContext)

    const handleRegister = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = {name,email,password,photo}
        console.log(user);

        createUser(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center md:items-center">
            <div className="flex-shrink-0 w-full max-w-sm object-fill rounded bg-base-200 ">

                <img className="rounded-xl bg-no-repeat bg-center ml-7" src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleRegister} >
               <div className="card-body">
                    <h1 className="text-4xl text-center font-bold">Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value='Register'/>
                        <p className='text-center mt-2'>Already have an Account <Link className='text-bold text-orange-600' to='/login'>Login</Link> </p>
                   <SocialLogin></SocialLogin>
                    </div>
                </div>
               </form>
            </div>
        </div>
    </div>
    );
};

export default Register;