
import { Link } from 'react-router-dom';

const SingleMyToys = ({ myToy,handleDelete }) => {
    const { photo, _id, ToysName, price, quantity, rating } = myToy;
    return (
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

            <td>{ToysName}</td>
            <td>{rating}</td>
            <td>{'$ ' + Number(price)}</td>
            <td>{quantity}</td>

            <td className='mr-2'>

                <Link to={`/updateToys/${_id}`}> <button className="btn btn-sm btn-outline btn-secondary">Update</button></Link>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-outline btn-warning">Delete</button>

            </td>
        </tr>

    );
};

export default SingleMyToys;