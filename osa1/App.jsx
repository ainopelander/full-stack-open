const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
  <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].part} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].part} exercise={props.parts[2].exercises}/>
    </div>
  )
}
const Total = (props) => {
  return(<p>Number of exercises {props.number}</p>)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part:'Fundamentals of React', exercises: 10},
    {part:'Using props to pass data', exercises: 7},
    {part:'State of a component', exercises: 14},
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts}/>
      <Total number = {parts[0].exercises + parts[1].exercises+parts[2].exercises}/>
    </div>
  )
}

export default App