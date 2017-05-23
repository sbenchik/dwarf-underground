import React, { Component } from 'react'
import './Comments.css'

class Comments extends Component{
    render(){
        return(
            <form>
                <input type="text"/>
                <button type="submit" className="expanded button"></button> 
            </form>
        )
    }
}

export default Comments