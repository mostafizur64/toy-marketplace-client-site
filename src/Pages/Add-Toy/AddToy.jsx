import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
const AddToy = () => {
    const { user } = useContext(AuthContext)
    useTitle('Add Toys')
    const handleAddToys = (event) => {

        event.preventDefault()
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const toysName = form.toy_name.value;
        const photo = form.photo.value;
        const Subcategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addToys = {
            CustomerName: name,
            email,
            ToysName: toysName,
            photo,
            Subcategory,
            price,
            rating,
            quantity,
            description,
        }
        console.log(addToys);
        fetch('https://animal-toys-server-alpha.vercel.app/addToys',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(addToys)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId ){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toys Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        });
    }
    return (
        <div>
            <form onSubmit={handleAddToys}>
                <div className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toys Name</span>
                            </label>
                            <input type="text" name='toy_name' placeholder="Toy Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Sub Category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="quantity" name="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="ADD TOY" />
                    </div>
                </div>
            </form>

        </div>
    );
};
export default AddToy;