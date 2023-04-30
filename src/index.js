 import React from 'react'
import ReactDOM from 'react-dom'
// Recommended
const Skills = () => {
  return (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </>
  )
}

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<RequiredSkills/>, rootElement)