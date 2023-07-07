import { Header } from './components/header'
import { Input } from './components/input'
import { Status } from './components/status'
import { PostWithoutContent } from './components/postWithoutContent'
import { Post } from './components/post'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './global.css'
import styles from './app.module.css'

export interface MyTasksProps {
  title: string
  isCompleted: boolean
  id: string
}

export function App() {
  const [myTasks, setMyTasks] = useState<MyTasksProps[]>([])

  const createdTasks = myTasks.length

  const TaskChecked = myTasks.filter(check => {
    return check.isCompleted == true
  })

  const taskCheckedOnStatus = TaskChecked.length

  const taskCheckedWithCreated = `de ${myTasks.length}`

  function addTasks(task: string) {
    setMyTasks([...myTasks, { title: task, isCompleted: false, id: uuidv4() }])
  }

  function deleteTask(id: string) {
    const test = myTasks.filter(content => {
      return content.id !== id
    })

    setMyTasks(test)
  }

  function checked(id: string) {
    const taskMap = myTasks.map(task => {
      return {
        ...task,
        isCompleted: task.id == id ? !task.isCompleted : task.isCompleted
      }
    })

    setMyTasks(taskMap)
  }

  useEffect(() => {
    console.log(myTasks)
  }, [myTasks])

  return (
    <div>
      <header>
        <Header />
        <Input addTasks={addTasks} />
      </header>

      <main>
        <Status
          createdTasks={createdTasks}
          taskCheckedOnStatus={taskCheckedOnStatus}
          taskCheckedWithCreated={taskCheckedWithCreated}
        />

        <div className={styles.postContainer}>
          {myTasks.length === 0 ? <PostWithoutContent /> :
            myTasks.map(note => {
              return (
                <Post
                  content={note.title}
                  id={note.id}
                  key={note.id}
                  deleteTask={deleteTask}
                  checkedTasks={checked}
                  myTasks={myTasks}
                  isCompleted={note.isCompleted}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}
