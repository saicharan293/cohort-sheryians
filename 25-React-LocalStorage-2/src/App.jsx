import React, { useState } from 'react'

const App = () => {

  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");


  const localData = JSON.parse(localStorage.getItem("all-users")) || [];
  const [allUsers, setAllUsers] = useState(localData);


  const submitHandler = (e) =>{
    e.preventDefault();
    const oldUsers = [...allUsers];
    oldUsers.push({userName, userRole, imageUrl, description});

    setAllUsers(oldUsers);

    localStorage.setItem("all-users", JSON.stringify(oldUsers));
    
    setUserName('');
    setImageUrl('');
    setUserRole('');
    setDescription('');
  }

  const deleteHandler = (idx) =>{
    const copyUsers = [...allUsers];

    const conf = confirm("do you want to delete for sure ?");
    if(conf){  
      copyUsers.splice(idx,1);
    }
    setAllUsers(copyUsers);
    localStorage.setItem("all-users", JSON.stringify(copyUsers));
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{submitHandler(e)}} action="" className='px-2 py-10 flex flex-wrap justify-center'>
        <input 
          value={userName}
          onChange={(e)=> setUserName(e.target.value)}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
          type="text" 
          placeholder='Enter your name...' />
        
        <input 
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
          type="text" 
          placeholder='Profile URL' />
        
        <input 
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
          type="text" 
          placeholder='Enter Role' />
        
        <input 
          value={description}
          onChange={e=> setDescription(e.target.value)}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
          type="text" 
          placeholder='Enter Description...'/>
        
        <button className='px-5 py-2 rounded m-2 w-[92%] bg-emerald-500 active:scale-95 cursor-pointer'>
          Create User
        </button>
      </form>

      <div className='px-4 py-10 mx-8 flex flex-wrap gap-4'>
        {allUsers.map(function(elem, idx){
          return <div key={idx} className='lg:w-[22vw] md:w-[30vw]- sm:w-[45vw] bg-white text-black rounded-xl text-center py-6 px-4 flex flex-col items-center'>
            <img 
                src={elem.imageUrl} 
                className='h-24 w-24 rounded-full object-cover object-center'
                alt="" />

            <h1 className='text-xl font-semibold my-2'>
                {elem.userName}
            </h1>

            <h5 className="text-base text-blue-400 font-semibold my-2">
                {elem.userRole}
            </h5>

            <p className='text-xs font-medium leading-tight my-2'>
                {elem.description}
            </p>

            <button onClick={()=>deleteHandler(idx)} className='px-4 py-2 rounded bg-red-500 active:scale-95 text-white cursor-pointer text-sm'>Remove</button>
        </div>
        })}
      </div>
    </div>
  )
}

export default App