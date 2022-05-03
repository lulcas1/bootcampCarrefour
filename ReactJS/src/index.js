import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    render(){
        const {clock} = this.state
        return(
            <div>
                <h1>{clock}</h1>
                
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)