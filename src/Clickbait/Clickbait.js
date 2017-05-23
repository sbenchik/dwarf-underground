import React, { Component } from 'react'
import './Clickbait.css'

function Clickbait(props){
    return(
        <div className="small-6 medium-3 columns other-article">
            <a href="#">
                <img src={props.url} alt={props.alt} />
                <p>{props.title}</p>
            </a>  
        </div>
    )
}

export default Clickbait