import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import SingleMyToys from "./SingleMyToys";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {

    const navigate = useNavigate()
    const [myToys, setMyToys] = useState([])
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    useTitle('My Toys')
    console.log(myToys);
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/myToys?email=${user.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'content-types': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    console.log(data);
                    setMyToys(data)
                }
                else {
                    navigate('/');
                }
            })
    }, [url, navigate])


    // useEffect(() => {
    //     fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
    //         .then(res => res.json())
    //         .then(data => setMyToys(data));
    // }, [asc, search])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            // const remaining = myToys.filter(toy=>toy._id !==_id)
                            // setMyToys(remaining)

                        }
                    })
            }
        })




    }

    return (
        <div className="mt-4  border-2 mb-4 rounded-xl">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Avatar</th>
                            <th>Toy Name</th>
                            <th>rating</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>Aciton</th>
                        </tr>
                    </thead>
                    <tbody>

                        {myToys.map(myToy => <SingleMyToys key={myToy._id} myToy={myToy} handleDelete={handleDelete}></SingleMyToys>)}



                    </tbody>


                </table>
            </div>
        </div>

    );
};

export default MyToys;