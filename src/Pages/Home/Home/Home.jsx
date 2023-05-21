import { useEffect } from "react";
import CustomerTestimonials from "../../Customer-testimonials/CustomerTestimonials";
import ShopByBrand from "../../ShopByBrand/ShopByBrand";
import SubCategory from "../../SubCategory/SubCategory";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import AOS from "aos";

import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      },[])
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <SubCategory></SubCategory>
           <CustomerTestimonials></CustomerTestimonials>
           <ShopByBrand></ShopByBrand>
        </div>
    );
};

export default Home;