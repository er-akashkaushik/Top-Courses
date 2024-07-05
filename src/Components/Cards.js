import React, { useState } from "react";
import Card from "./Card.js";

function Cards(props) {
let courses = props.courses;
let category = props.category;

const[likedCourses, setLikedCourses] = useState([]);

// returns you a list of all courses recieved from api response in single array
function getCourses () {
  if(category==="All"){
    let allCourses = [];
    Object.values(courses).forEach ( courseCategory => {
          courseCategory.forEach( courseData => { allCourses.push(courseData); } )
      } 
    )
      return allCourses;
  }
  else{
    return courses[category];
  }
  
}

return (
  <div className="flex flex-wrap justify-center gap-4 mb-4">
  {
    getCourses().map((course) => (
         <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
    ) )
  }
  </div>
  )
}

export default Cards
