import React, { useState } from 'react'
import Card from './components/Card';

const App = () => {

  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const [allUsers, setAllUsers] = useState([]);


  const submitHandler = (e) =>{
    e.preventDefault();
    const oldUsers = [...allUsers];
    oldUsers.push({userName, userRole, imageUrl, description});

    setAllUsers(oldUsers);
    
    setUserName('');
    setImageUrl('');
    setUserRole('');
    setDescription('');
  }

  const deleteHandler = (idx) =>{
    const copyUsers = [...allUsers];
    copyUsers.splice(idx,1);
    setAllUsers(copyUsers);
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
          return <Card elem={elem} deleteHandler={deleteHandler} idx={idx}/>
        })}
      </div>
    </div>
  )
}

export default App