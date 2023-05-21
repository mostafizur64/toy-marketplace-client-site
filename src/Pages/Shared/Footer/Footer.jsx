import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-base-200">
          <footer className="footer p-10  text-base-content">
        <div>
        <Link to='/'> <img className="h-12 w-12 rounded-full " src="https://i.ibb.co/bQ4Sq00/46708d75d6ba97b6706acddb43f175d9.webp" alt="" />
                <a className="text-xl text-orange-500 ml-2">Animal toys</a></Link>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Pet Fancy</a> 
          <a className="link link-hover">London BullDogs</a> 
          <a className="link link-hover">Doggy Pup</a> 
          <a className="link link-hover">Gray Husky</a>
        </div> 
        <div>
          <span className="footer-title">contact</span> 
          <a className="link link-hover">+00801760575664</a> 
          <a className="link link-hover">Email:mostafizurm01@gmail.com</a> 
          
        </div> 
        <div>
          <span className="footer-title">Social Link</span> 
         <div className="flex items-center gap-2">
         <button className="btn btn-circle btn-outline ">
                      G
            </button>
          <button className="btn btn-circle btn-outline ">
                      T
            </button>
          <button className="btn btn-circle btn-outline ">
                      F
            </button>
         </div>
        </div>
    
      </footer>
      <p className="text-center">Copyright &copy; 2023</p>
      </div>
    );
};

export default Footer;