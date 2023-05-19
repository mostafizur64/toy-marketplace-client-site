
import { Link } from 'react-router-dom';

const SingleAllToy = ({allToy}) => {
    const {CustomerName,ToysName,price,rating,Subcategory,quantity,photo} = allToy
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{CustomerName}</h2>
          <p className='text-xl text-orange-600'>Price ${price}</p>
          <p className='text-xl text-orange-600'>Rating {rating}</p>
          <p className='text-xl text-orange-600'>{quantity}</p>
          <p className='text-xl text-orange-600'>{Subcategory}</p>
          <div className="card-actions">
            <Link to=''><button className="btn btn-primary">Buy Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default SingleAllToy;