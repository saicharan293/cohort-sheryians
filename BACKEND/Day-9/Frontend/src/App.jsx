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
  const [editId, setEditId] = useState(null);
  const [editedDescription, setEditedDescription] = useState("");

  function handleUpdateDescription(id){
    axios.patch(`${import.meta.env.VITE_BACKEND_URI}/api/notes/${id}`,{
      description: editedDescription
    })
    .then(res => {
      setEditId(null);
      setEditedDescription("");
      fetchNotesData();
    })
  }

  function handleEdit (note){
    setEditId(note._id);
    setEditedDescription(note.description);
  }

  const fetchNotesData = async() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/notes/all`)
    .then((res) => {
      setNotes(res.data.notes || [])
      
    })
    .catch((error) => console.error(error))
  }

  function handleSubmit(e){
    e.preventDefault();

    const {title, description} = e.target.elements;

    console.log(title.value, description.value);
    axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/notes`, {
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
    axios.delete(`${import.meta.env.VITE_BACKEND_URI}/api/notes/${id}`)
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
                {editId === note._id ? (
                  <>
                    <input 
                      type="text" 
                      value={editedDescription} 
                      onChange={(e) => {
                        setEditedDescription(e.target.value)
                      }} 
                    />
                    <button onClick={() => handleUpdateDescription(note._id)}>
                      Update
                    </button>
                    <button onClick={() => {
                      setEditId(null);
                      setEditedDescription("");
                    }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <p>{note.description}</p>
                    <button onClick={() => handleEdit(note)}>Edit</button>
                  </>
                )}
                <button onClick={() => handleDelete(note._id)}>delete</button>
              </div>
          })
        }
      </div>
    </>
  )
}

export default App
