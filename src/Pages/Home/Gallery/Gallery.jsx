import AOS from "aos";

import 'aos/dist/aos.css'
import { useEffect } from "react";
// <script src="bower_components/aos/dist/aos.js"></script> 
function Gallery() {
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

      <div className="card w-full  shadow-xl mt-4 mb-4">
        <h2 className="text-center text-2xl text-orange-500 text-extrabold">Gallery</h2>
        <div className="grid grid-cols-3 gap-4 shadow-xl mt-4 rounded-xl">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <img src="https://img.freepik.com/free-photo/play-dough-background-with-octopus_23-2149700404.jpg?w=740&t=st=1684600983~exp=1684601583~hmac=69b0e6aec73511aabdfed234fc87a133eb3f9515c9deeb7ce7c9f95bfbacf241" alt="" />
            </div>
            <div className="rounded-xl" data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector">
          <img src="https://img.freepik.com/premium-photo/play-dough-background-with-snail_23-2149700393.jpg" alt="" />

            </div>
          <div className="rounded-xl" data-aos="fade-right">
          <img src="https://img.freepik.com/premium-photo/dinosaur-plush-doll-isolated-white-background_49558-196.jpg?w=740" alt="" />

            </div>
          <div className="rounded-xl" data-aos="fade-up-right">
          <img src="https://img.freepik.com/premium-photo/fun-cat-3d-illustration_183364-82829.jpg?w=740" alt="" />

            </div>
          <div className="rounded-xl" data-aos="flip-left">
          <img src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962423.jpg?w=740&t=st=1684661576~exp=1684662176~hmac=ae82500a63677a0827aba90e533edf942ef2221b1e8b26c31cf847d1ee46a445" alt="" />

            </div>
          <div className="rounded-xl" data-aos="fade-right">
          <img src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962427.jpg?w=740&t=st=1684661521~exp=1684662121~hmac=980d550ba1ac8f4a4c72f590685326038990ffab5e6a81ae82a2a3a19bbe1e7a" alt="" />

            </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;