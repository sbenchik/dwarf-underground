import React, { Component } from 'react'
import './Clickbait.css'

class Clickbait extends Component{
    render(){
        return(
            <div className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={this.props.url} alt={this.props.alt} />
                    <p>{this.props.title}</p>
                </a>  
            </div>
        )
    }
}

export default Clickbait