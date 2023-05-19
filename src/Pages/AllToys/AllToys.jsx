import { useEffect, useState } from "react";
import SingleAllToy from "./SingleAllToy";


const AllToys = () => {
    const [allToys,setAllToys] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/alltoys')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setAllToys(data)
        })
    },[])
    return (
        <div className="text-center mt-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                allToys.map(allToy =><SingleAllToy key={allToy._id} allToy={allToy}></SingleAllToy>)
            }
        </div>
    </div>
    );
};

export default AllToys;