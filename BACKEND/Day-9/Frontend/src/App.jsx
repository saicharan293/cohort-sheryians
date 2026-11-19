import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([
    {
      title: "test title",
      description: "description"
    },
    {
      title: "test title",
      description: "description"
    },
    {
      title: "test title",
      description: "description"
    },
    {
      title: "test title",
      description: "description"
    },
  ])

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchNotesData = async() => {
    axios.get(`/api/notes`)
    .then((res) => {
      setNotes(res.data.notes || [])
      
    })
    .catch((error) => console.error(error))
  }

  function handleSubmit(e){
    e.preventDefault();

    const {title, description} = e.target.elements;

    console.log(title.value, description.value);
    axios.post(`/api/notes`, {
      title: title.value, 
      description: description.value
    })
    .then(res => {
      // console.log(res.data)
      setTitle("");
      setDescription("");
      fetchNotesData()
    })
    .catch(error => console.error(error))
  }

  function handleDelete(id){
    axios.delete(`/api/notes/${id}`)
    .then(res => {
      // console.log(res.data);
      fetchNotesData();
    })
    .catch(error => console.error(error));
  }

  useEffect(()=>{
    fetchNotesData();
  }, [])

  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Enter title' />
        <input name='description' type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Enter description'/>
        <button>Create note</button>
      </form>
      <div className="notes">
        {
          notes.map((note) => {
            return  <div className="note" key={note._id}>
                <h1>{note.title}</h1>
                <p>{note.description}</p>
                <button onClick={() => handleDelete(note._id)}>delete</button>
              </div>
          })
        }
      </div>
    </>
  )
}

export default App
