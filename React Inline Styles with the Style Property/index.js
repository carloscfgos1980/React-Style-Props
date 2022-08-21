import React from "react"
import ReactDOM from "react-dom"

function App() {
  // if I life empty the space in new Date(), then I get the currently hour
  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }


  // In order to do inline style, we have to do doble {}, as follow and everything is like JavaScrip format, like the following example
  //   return (
  //     <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>
  //   )
  // }



  // Best practice is to move all the style into a variable (const) ad then add it inline. This is useful to chance style dibamically
  // Numbers must be wrap it in "", like this fontSize: "200px"
  // const styles = {
  //   color: "#FF8C00", 
  //   backgroundColor: "#FF2D00",
  //   fontSize: "200px"
  // }

  // return (
  //   <h1 style={styles}>Good {timeOfDay}!</h1>
  // )
  // }

  return (
    //<h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))