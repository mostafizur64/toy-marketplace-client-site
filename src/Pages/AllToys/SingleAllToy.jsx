
import { Link } from 'react-router-dom';

const SingleAllToy = ({ allToy }) => {
  const { _id, CustomerName, ToysName, rating, price, Subcategory, quantity, photo } = allToy
  return (
    //   <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure className="px-10 pt-10">
    //     <img src={photo} alt="Shoes" className="rounded-xl" />
    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">{CustomerName}</h2>
    //     <p className='text-xl text-orange-600'>ToyName {ToysName}</p>
    //     <p className='text-xl text-orange-600'>Price ${price}</p>
    //     <p className='text-xl text-orange-600'>{quantity}</p>
    //     <p className='text-xl text-orange-600'>{Subcategory}</p>
    //     <div className="card-actions">
    //       <Link to={`/singleToyDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    //     </div>
    //   </div>
    // </div>
    <tr>


      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>

        </div>
      </td>

      <td>{CustomerName}</td>
      <td>{ToysName}</td>
      <td>{Subcategory}</td>
      
      <td>{'$ ' + price}</td>
      <td>{quantity}</td>

      <td className='mr-2'>

        <div className="card-actions">
           <Link to={`/singleToyDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>

      </td>
    </tr>
  );
};

export default SingleAllToy;