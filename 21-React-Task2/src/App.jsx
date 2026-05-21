import React from 'react'
import Card from './components/Card'
import amazon from './assets/amazonlogo2.webp'
import google from './assets/google.png'
import microsoft from './assets/microsoft.png'
import spotify from './assets/spotify.png'
import netflix from './assets/netflix.webp'

const App = () => {

  const jobs = [
    {
      id: 1,
      company: "Amazon",
      logo: amazon,
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part-Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
    },

    {
      id: 2,
      company: "Google",
      logo: google,
      posted: "2 days ago",
      role: "Frontend React Developer",
      type: "Full-Time",
      level: "Mid Level",
      salary: "$150/hr",
      location: "Bangalore, India",
    },

    {
      id: 3,
      company: "Microsoft",
      logo: microsoft,
      posted: "1 week ago",
      role: "Product Designer",
      type: "Remote",
      level: "Senior Level",
      salary: "$135/hr",
      location: "Hyderabad, India",
    },

    {
      id: 4,
      company: "Spotify",
      logo: spotify,
      posted: "3 days ago",
      role: "UI Motion Designer",
      type: "Contract",
      level: "Junior Level",
      salary: "$90/hr",
      location: "Pune, India",
    },

    {
      id: 5,
      company: "Netflix",
      logo: netflix,
      posted: "6 days ago",
      role: "Visual Experience Designer",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$180/hr",
      location: "Chennai, India",
    },
  ]

  return (
    <div className='bg-gray-200 h-screen flex flex-wrap overflow-auto justify-start items-center px-5 py-2 gap-8'>
      {jobs.map((job)=>{
        return  <Card id={job.id} job={job}/>
      })}
    </div>
  )
}

export default App