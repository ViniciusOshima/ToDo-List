import {Header} from './components/header'
import {Input} from './components/input'
import {Status} from './components/status'
import {PostWithoutContent} from './components/postWithoutContent'
import {Post} from './components/post'

import { useState } from 'react'

import './global.css'
import './app.module.css'

export function App () {
  const [myTasks, setMyTasks] = useState([])

  const createdTasks = myTasks.length

  function addTasks (task: string) {

    setMyTasks([...myTasks, task])
    

  }


  return (
    <div>
      <header>
        <Header />
        <Input addTasks= {addTasks}  />
      </header>

      <main>
        <Status createdTasks= {createdTasks} />

        {myTasks.map((note) => {
          return <Post content= {note} />
        })}
      </main>
      
      
    </div>
    
  )
}