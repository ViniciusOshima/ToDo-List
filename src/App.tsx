import {Header} from './components/header'
import {Input} from './components/input'
import {Status} from './components/status'
import {PostWithoutContent} from './components/postWithoutContent'
import {Post} from './components/post'

import './global.css'
import './app.module.css'

let anotações = [
  {
    checked: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },

  {
    checked: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  }
]

export function App () {
  return (
    <div>
      <header>
        <Header />
        <Input />
      </header>

      <main>
        <Status />

        {anotações.map((note) => {
          return <Post content= {note.content} />
        })}
      </main>
      
      
    </div>
    
  )
}