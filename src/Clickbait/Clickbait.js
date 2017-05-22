import React, { Component } from 'react'
import Clickbait1 from './Clickbait1'
import Clickbait2 from './Clickbait2'
import Clickbait3 from './Clickbait3'
import Clickbait4 from './Clickbait4'
import './Clickbait.css'

class Clickbait extends Component{
    render(){
        return(
           <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <Clickbait1 />
            <Clickbait2 />
            <Clickbait3 />
            <Clickbait4 />
          </div>
        )
    }
}

export default Clickbait