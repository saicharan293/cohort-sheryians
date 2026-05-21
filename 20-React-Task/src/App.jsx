import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
  {
    id: 1,
    name: "Emma Watson",
    username: "@emma",
    bio: "Travel lover and lifestyle creator.",
    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    posts: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    ],
    media: "37",
    followers: "214k",
    following: "231",
  },
  {
    id: 2,
    name: "John Carter",
    username: "@john",
    bio: "Photographer & coffee addict.",
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    posts: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    ],
    media: "52",
    followers: "120k",
    following: "180",
  },
  {
    id: 3,
    name: "Sophia Lee",
    username: "@sophia",
    bio: "Fashion designer and blogger.",
    profile:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    posts: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
    ],
    media: "84",
    followers: "540k",
    following: "312",
  },
  {
    id: 4,
    name: "David Miller",
    username: "@david",
    bio: "Fitness coach and entrepreneur.",
    profile:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    posts: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ],
    media: "65",
    followers: "98k",
    following: "145",
  },
  {
    id: 5,
    name: "Olivia Brown",
    username: "@olivia",
    bio: "Digital artist and creator.",
    profile:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    posts: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    ],
    media: "41",
    followers: "302k",
    following: "201",
  },
];

  return (
    <div className='bg-blue-50 h-screen py-6 px-6 flex flex-wrap gap-6 overflow-y-auto justify-center'>
      {users.map((function(user){
        return <Card key={user.id} user={user}/>
      }))}
    </div>
  )
}

export default App