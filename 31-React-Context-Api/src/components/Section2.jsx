import React from 'react'
import AllCourses from './AllCourses'

const Section2 = (props) => {
  console.log(props.courseData);
  
  return (
    <div>
      Section2
      <AllCourses courseData={props.courseData}/>
    </div>
  )
}

export default Section2