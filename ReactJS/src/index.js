import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function primeiroJSX(){
    return(
        <div>
            Lucas
        </div>
    )
}

const App = () =>{

    return(
        <div className="APP">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)