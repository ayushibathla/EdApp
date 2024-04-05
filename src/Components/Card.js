import React from 'react';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
   let course = props.course;
   let likedCourses = props.likedCourses; //ye ek array hai jisme track hoga ki konse courses like huye hai or konse nahi

   let setLikedCourses = props.setLikedCourses;

   function clickHandler () {
      if(likedCourses.includes(course.id)) {
        //already liked
        setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id) ) );
        toast.warning("Like removed");
      }
      else{
        //not liked before - insert in likedCourses
        if(likedCourses.length === 0){
          setLikedCourses([course.id]);
        }
        else{
          //already non-empty
          setLikedCourses((prev) =>[...prev,course.id]);
        }
        toast.success("Liked successfully");
      } 
   }
  return (
    <div className='w-56 bg-slate-600 rounded-md overflow-hidden '>

      <div className='relative'>
        <img src={course.image.url}/>
        <div className="w-8 h-8 rounded-full absolute right-1  bottom-px  grid placeitem-center bg-white flex justify-center">
            <button onClick={clickHandler}>
              {
                likedCourses.includes(course.id) ? 
                (<FcLike/>) :
                (<FcLikePlaceholder/>) 
              }
            </button>
        </div>
      </div>

      <div className='p-4' >
          <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
          <p className='text-white mt-2 text-xs'>
          {
             course.description.length>100? course.description.substring(0,100) + "...":course.description
          }
          </p>
      </div>

    </div>
  )
}
export default Card;

//return ke andar sirf components likhte hai agar js ka code likhna hai toh div ke andar { } dene padenge