import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToys = () => {
    const toy = useLoaderData()
const {_id,price,rating,description,quantity} = toy

    const handleAddToys=(event)=>{
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToys ={  price,rating,quantity,description  }
        console.log(updateToys);
        //send data to the server
        fetch(`http://localhost:5000/myToys/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateToys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    // console.log(toy);
    return (
        <div>
             <form onSubmit={handleAddToys}>
                <h2 className="text-3xl text-center">Update Toy:</h2>
                <div className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="quantity" name="quantity" defaultValue={quantity} className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={description} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="UPDATE TOY" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;