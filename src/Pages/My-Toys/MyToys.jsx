import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import SingleMyToys from "./SingleMyToys";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {

    const navigate = useNavigate()
    const [myToys, setMyToys] = useState([])
  
    useTitle('My Toys')
    console.log(myToys);
    const { user } = useContext(AuthContext)

    const url = `https://animal-toys-server-alpha.vercel.app/myToys?email=${user.email}`
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
                fetch(`https://animal-toys-server-alpha.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success',
                            )
                            const remaining = myToys.filter(toy=>toy._id !==id)
                            setMyToys(remaining)

                        }
                    })
            }
        })




    }
    const hanadleAssending = () => {
        fetch('https://animal-toys-server-alpha.vercel.app/shortAssending')
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }
    const hanadleDesending = () => {
        fetch('https://animal-toys-server-alpha.vercel.app/shortDesending')
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }

    return (
        <div className="mt-4  border-2 mb-4 rounded-xl">
            <div className="overflow-x-auto w-full">
                <th>
                    <button onClick={hanadleAssending} className="btn btn-sm btn-outline btn-secondary">Assending</button>
                    <button onClick={hanadleDesending} className="btn btn-sm btn-outline btn-secondary">Desending</button>
                   
                </th>
                <table className="table w-full">

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