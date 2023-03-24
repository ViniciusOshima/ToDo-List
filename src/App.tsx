import {Header} from './header'
import {Input} from './input'
import {Status} from './status'
import {PostWithoutContent} from './postWithoutContent'
import {Post} from './post'

import './global.css'
import './app.module.css'

let anotações = [
  {
    checked: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  }
]

export function App () {
  return (
    <div>
      <Header />
      <Input />
      <Status />
      <Post />
    </div>
    
  )
}