import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import {  FaRegStar,  FaStar } from 'react-icons/fa';
const SingleToyDetails = () => {
    const singleToys = useLoaderData()
    const { CustomerName, email, ToysName, photo, price, rating, description, } = singleToys
    console.log(singleToys);
    return (
        <div className="card w-full mx-auto bg-base-100 shadow-xl mt-4 mb-4">
        <figure><img className="rounded-xl" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-3xl text-center text-orange-500">{ToysName}</h2>
         <div className="grid text-center border-2 ">
         <p>CustomerName:{CustomerName}</p>
          <p>{email}</p>
          <p>{price}</p>
          <p>
          <Rating placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
          </p>
          <p>{description}</p>
         </div>
        </div>
      </div>
    );
};

export default SingleToyDetails;