import { useEffect, useState } from "react";
import SingleAllToy from "./SingleAllToy";
import useTitle from "../../Hooks/useTitle";


const AllToys = () => {
    useTitle('All Toys')
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState('');
    // const [data , setData]  =useState([])
 
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllToys(data);
            })
    }, []);

    const handleSearchToy = () => {
        fetch(`http://localhost:5000/getToyName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
                setAllToys(data)
            })
           

            


    }
    return (
        <div className="mt-4  border-2 mb-4 rounded-xl">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="search by name" />
                                <button onClick={handleSearchToy}> Search</button>
                        <tr>
                            
                            <th>Avatar</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>Aciton</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(allToy => <SingleAllToy key={allToy._id} allToy={allToy}></SingleAllToy>)

                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToys;