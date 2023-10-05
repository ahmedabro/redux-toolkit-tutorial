import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './features/posts/PostsList'
import AddPost from './features/posts/AddPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='App'>
      <AddPost />
      <PostsList />
    </main>
  )
}

export default App
