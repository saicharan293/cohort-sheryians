import React from 'react'

const Navbar = (props) => {
    // console.log(props.links);
    
  return (
    <div style={{backgroundColor: props.color}} className=' mb-1 flex items-center justify-between px-8 py-3 text-white'>
        <h2>{props.title}</h2>
        <div className="flex gap-10">
          {props.links.map(function(ele, id){
            return <h4 key={id} className="text-xl">{ele}</h4>
          })}
        </div>

    </div>
  )
}

export default Navbar