import React from 'react';
import Card from './Card';
import {useState} from 'react';

const Cards = (props) =>{
  let courses = props.courses;
  let category = props.category;

  const [likedCourses,setLikedCourses] = useState([]);

    function getCourses () {       
      if(category === "All"){
        let allCourses = [];    
      Object.values(courses).forEach(array => {
        array.forEach((courseData)=>{
          allCourses.push(courseData);
        })
      })
      return allCourses;
      }
      else{ //will pass only specific category data
        return courses[category];
      }
    }

    return(
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        { //map function is applied on array only
        getCourses().map( (course) => (
          <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        ))
        }
      </div>
   )
}

export default Cards;
//key business hai value me 5 object pade hai array ke andar ; mujhe key se matlab nhi values se matlab hai toh mai Object.values use krungi

//Object.values(courses)- ek array mila jisme 5 array pade hai lekin mujhe ek array me saari values chahiye isliye maine for each loop chala dia

//ek for each loop bade array me traverse kar rha hai or doosra for each loop andar vle array me
