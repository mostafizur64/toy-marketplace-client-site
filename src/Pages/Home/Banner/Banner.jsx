

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl mt-4">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://img.freepik.com/premium-photo/children-s-toys-white-background_168508-619.jpg?w=740" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/toys-pegs_23-2147698726.jpg?w=740&t=st=1684427195~exp=1684427795~hmac=5b33b2b29bce91f36d1166373a0977bb63e7d524d252aa1a5f3027bedd50a4ce" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=740&t=st=1684427280~exp=1684427880~hmac=dec7ac46ce6354807b3513f9347d8cb1f26951d463b4d6aa45e3cbf08c4a2b0b" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/little-child-lies-among-toy-bears-bed_1304-3948.jpg?t=st=1684422414~exp=1684423014~hmac=e0d987c122ea299f1e2d27a20cf783383b3805fd94e17bd84fd694fe266d2b3f" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;