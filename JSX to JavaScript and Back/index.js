import React from "react"
import ReactDOM from "react-dom"

// In React when we want to work with JavaScript, we put the elements within {}, like the followed example

// function App() {
//   const firstName = "Bob"
//   const lastName = "Ziroll"



// return (
//   <h1>Hello {firstName + " " + lastName}!</h1>
// )

//   return (
//     <h1>Hello {`${firstName} ${lastName}`}!</h1>
//   )
// }



// Function to obtain the time of the day
// function App() {
//   const date = new Date()

//   return (
//     <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
//   )
// }

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <h1>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))