import React, { Component } from 'react';
import Comments from '../Comments/Comments'
import './Article.css'

class Links extends Component{
    constructor(){
        super()
        this.state = {
            commentsVisible: false,
        }
    }
    
    showComments(ev){
        ev.preventDefault()
        this.setState({commentsVisible: !this.state.commentsVisible,})
    }

    render(){
        return(
            <div className="article-links">
                <a className="article-link" onClick={this.showComments.bind(this)}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share-alt"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
                {this.state.commentsVisible ? <Comments /> : null}
            </div>
        )
    }
}

export default Links
