import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

    const params = useParams();
  return (
    <div>
        <h1 className='text-3xl font-bold underline absolute top-1/2 left-1/2 -translate-x-1.5'>
            {params.courseId} Course Page
        </h1>
    </div>
  )
}

export default AnyCourse