import { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

  const [title, settitle] = useState('');
  const [description, setDescription] = useState('');

  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) =>{
    e.preventDefault();
    const copyTask = [...tasks];
    copyTask.push({title,description});
    setTasks(copyTask);
    settitle('');
    setDescription('');
  }

  // const deleteNote = (id) =>{
  //   setTasks(prev => prev.filter((_,idx) => idx != id));
  // }

  const deleteNote = (id) =>{
    const copyTask = [...tasks];

    copyTask.splice(id, 1);
    setTasks(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e)=>submitHandler(e)} className='lg:w-1/2 flex items-start flex-col gap-4 p-10'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='p-5 w-full font-medium border-2 rounded outline-none'
          value={title}
          onChange={(e) => settitle(e.target.value)}
          />

        <textarea
          placeholder='Enter Details'
          type='text'
          className='px-5 py-2 w-full font-medium border-2 rounded h-40 outline-none'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        
        <button 
          className='bg-white w-full outline-none text-black px-5 py-2 rounded active:bg-gray-300 active:scale-95'
          >
            Add Note
        </button>
      </form>
      <div className=' p-10 lg:border-l-2 w-1/2 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {tasks.map(function(elem, idx){
            return <div key={idx} className="relative h-52 w-44 text-black bg-cover py-6 px-4 rounded-2xl bg-[url('https://gpng.net/wp-content/uploads/2020/10/sticky-notes-png-free-to-use-png-resource.png')]">
              <h2 className='absolute top-5 right-3 bg-red-500 p-1 text-xs rounded-full'>
                <X 
                  size={18} 
                  className='cursor-pointer' 
                  color='#fff' 
                  strokeWidth={2.75} 
                  onClick={()=>deleteNote(idx)} 
                />
              </h2>
              <h3 className='leading-tight text-xl font-bold'>
                {elem.title}
              </h3>
              <p className='mt-4 leading-tight font-medium text-gray-500'>
                {elem.description}
              </p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App