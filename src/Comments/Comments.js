import React, { Component } from 'react'
import './Comments.css'

class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {
            comment: '',
            comments: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    addComment(ev){
        const state = {...this.state}
        const comment = {
            text: this.state.comment,
            time: new Date(),
        }
        state.comments.push(comment)
        state.comment = ''
        this.setState(state, () => console.log(state))
    }

    handleChange(ev){
        this.setState({
            comment: ev.target.value
        })
    }

    render(){
        return(
            <div>
                <textarea className="comment-form" type="text" placeholder="Enter a comment" 
                    value={this.state.comment} onChange={this.handleChange}/>
                <a className="article-link">
                    <i className="fa fa-mail-forward"></i>
                    <span className="article-link-text" onClick={this.addComment}>Reply</span>
                </a>
                <div className="comments">
                    {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                </div>
            </div>
        )
    }
}

function Comment(props){
    return(
        <div className="comment">
            <div>{props.comment.text}</div>
        </div>
    )
}

export default Comments