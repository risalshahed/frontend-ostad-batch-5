import './App.css'
import SettingsPanel from './components/SettingsPanel'
import TodoApp from './components/TodoApp'

// redux toolkit install
// react-redux install

// Redux or Zustand or Flux

// UI Component -> Shadcn, Material UI, Ant Design, Daisy, React BS, Framer Motion, Three JS, GSAP ... ... ...

// React Framework -> Next JS, Aestro JS, Gatsby

/* Job pete ja ja lagbe
Portfolio
CSS, JAVASCRIPT
React, Tailwind, Next */

function App() {

  return (
    <div className="max-w-300 mx-auto">
      <SettingsPanel />
      <h1 className='font-bold text-4xl text-center pt-10'>
        Module 9 - Lecture 2
      </h1>
      <TodoApp />
    </div>
  )
}

export default App
