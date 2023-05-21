import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs } from "react-tabs";
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleSubCategoy from "./SingleSubCategoy";
const SubCategory = () => {

  const [subCategorys, setSubCategory] = useState([])
  const [singelSubCategorys, setSingleSubCategorys] = useState([]);
  const [loading, setLaoding] = useState(true);
  const [id, setId] = useState('')

  useEffect(() => {
    fetch(`https://animal-toys-server-alpha.vercel.app/alltoys`)
      .then(res => res.json())
      .then(data => {
        setSubCategory(data)
        setLaoding(false)
      })
  }, [])

  useEffect(() => {
    const newFm = async () => {
      const res = await fetch(`https://animal-toys-server-alpha.vercel.app/subCategory/${id}`)
      const data = await res.json()
      setSingleSubCategorys(data)
      setLaoding(false)
    }
    newFm();
  }, [id])
  console.log(singelSubCategorys);

  if(loading){
    return <p>loadding......</p>
  }
  return (
    <div>
      <h2 className="text-center text-3xl text-orange-500 font-bold">Sub category</h2>
      <Tabs>
        <TabList className='text-center mt-4'>
          {
         
            subCategorys?.slice(0,3).map(sub => <Tab onClick={() => setId(sub.Subcategory)} key={sub._id}>{sub.Subcategory}</Tab>)
            
          }
          <hr />
        </TabList>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {
          singelSubCategorys?.slice(0,3).map(singleSub => <SingleSubCategoy key={singleSub._id} singleSub={singleSub}></SingleSubCategoy>)

        }
        </div>
       


      </Tabs>

    </div>
  );
};

export default SubCategory;