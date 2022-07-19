import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course.parts[1].name)
  return (

    < div >
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div >
  )
}

const Header = (props) => {
  return (
    <div>
      <h1> {props.course.name}  </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h2>

        <Part1 part1={props.course.parts[0].name} exercises1={props.course.parts[0].exercises} />
        <Part2 part2={props.course.parts[1].name} exercises2={props.course.parts[1].exercises} />
        <Part3 part3={props.course.parts[2].name} exercises3={props.course.parts[2].exercises} />
      </h2>

    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  )
}
const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  )
}
const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h2>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</h2>
    </div>
  )
}

export default App	