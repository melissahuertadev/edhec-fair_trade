import React, { Component } from "react";

import "./CommentBox.css";

import CommentList from "../CommentList";
import CommentForm from "../CommentForm";


class CommentBox extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        comments: [],
        loading: false
      };
      this.addComment = this.addComment.bind(this);
    }

    addComment(comment) {
        this.setState({
          loading: false,
          comments: [comment, ...this.state.comments]
        });
    }
  
    render() {
      const loadingSpin = this.state.loading ? "CommmentBox-logo Spin" : "CommmentBox-logo";
      return (
        <div className="CommmentBox container bg-light shadow">
          <header className="CommmentBox-header">
            <h1 className="CommmentBox-title">
              React Comments
              <span className="px-2" role="img" aria-label="Chat">
                💬
              </span>
            </h1>
          </header>
  
          <div className="row">
            <div className="col-4  pt-3 border-right">
              <h6>Say something about React</h6>
              {/* Comment Form Component */}
            </div>
            <div className="col-8  pt-3 bg-white">
              {/* Comment List Component */}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default CommentBox;