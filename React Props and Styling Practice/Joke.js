import React from "react"
// Another way to inline style the questions: <h3 style={{display: props.question ? "block" : "none"}}>
// We can style the answer differently if there is not any question, like this <h3 style={{color: !props.question && "#888888"}}>
function Joke(props) {
    return (
        <div>
            <h3 style={{ display: !props.question && "none" }}>Question: {props.question}</h3>
            <h3 style={{ color: !props.question && "#888888" }}>Answer: {props.punchLine}</h3>
            <hr />
        </div>
    )
}

export default Joke