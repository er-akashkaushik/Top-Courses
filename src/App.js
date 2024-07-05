import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data.js";
import Navbar from "./Components/NavBar.js";
import Filter from "./Components/Filter.js";
import Cards from "./Components/Cards.js";
import Spinner from "./Components/spinner.js";
import { toast } from "react-toastify"; 

function App() {

const[courses, setCourses] = useState([]);
const[loading, setLoading] = useState(true);
const[category, setCategory] = useState(filterData[0].title);

async function fetchData() {
  setLoading(true);
  try {
    const response = await fetch(apiUrl);
    const output = await response.json();
    //save data into variable 
    setCourses(output.data);
  }
  catch(error){
    toast.error("Something went wrong");
  }
  setLoading(false);
}

  useEffect(() => {
      fetchData();
  }, [] );

if (loading) {
  return (
    <div className="min-h-screen bg-red-400 flex items-center justify-center">
      <Spinner />
    </div>
  );
}

if (!loading && courses.length === 0) {
  return (
    <div className="min-h-screen bg-red-400 flex items-center justify-center text-white font-bold text-[2rem]">
      No Data Found...
    </div>
  );
}

  return (
    <div className="min-h-screen bg-red-400 flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-red-400">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          <Cards courses={courses} category={category} />
        </div>
      </div>
    </div>
  );  
}

export default App;