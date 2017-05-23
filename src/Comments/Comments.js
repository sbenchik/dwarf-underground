import React, { Component } from 'react'
import './Comments.css'

class Comments extends Component{
    render(){
        return(
            <form>
                <textarea className="comment-form" type="text"/>
                <a className="article-link">
                    <i className="fa fa-mail-forward"></i>
                    <span className="article-link-text">Reply</span>
                </a>
            </form>
        )
    }
}

export default Comments