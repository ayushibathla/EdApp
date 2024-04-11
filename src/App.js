import './App.css';
import React from 'react';
import {toast} from 'react-toastify';

import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';

import {apiUrl,filterData} from './data';

import { useEffect,useState } from 'react';

function App() {

  const [courses,setCourses] = useState(null);  
  const[loading,setLoading] = useState(true); 
  const[category,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);  //This task is performed when app component is rendered ; task-to fetch data from API call

  return (
    <div className="min-h-screen flex flex-col bg-slate-400"> 
      <div>
        <Navbar/>
      </div>

      <div className="bg-slate-400">
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>  
      </div>

      <div className="w-9/12 max-w-7xl mx-auto flex flex-wrap justify-center items-center min-h-50">
        {
        loading ? (<Spinner/>) : (<Cards courses = {courses} category={category} />)
        }
      </div>
      </div>
    </div>
  );
};
export default App;
