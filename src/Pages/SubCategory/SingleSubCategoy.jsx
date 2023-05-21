import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from "react-rating";

const SingleSubCategoy = ({ singleSub }) => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { _id, photo, ToysName, rating, price, } = singleSub
  console.log(singleSub);

  const handleViewDetails = () => {
    if (user) {
      return navigate(`/singleToyDetails/${_id}`)
    }
    else {
      Swal.fire({
        title: 'Success!',
        text: 'Coffee Updated successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }

  return (
    <div className=" h-[500px]"  >

      <div data-aos="flip-left" data-aos-delay="10" className="card  bg-base-100 text-center justify-center shadow-xl   ">
        <figure><img className="w-48 h-48" src={photo} alt="Shoes" /></figure>
        <div className="card-body text-left">
          <h2 className="card-title">{ToysName}</h2>

          <p> <Rating placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          /></p>
          <p>Price:{price}</p>
          <div className="card-actions ">
            <button onClick={handleViewDetails} className="btn btn-primary">VIEW DETAILS</button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default SingleSubCategoy;