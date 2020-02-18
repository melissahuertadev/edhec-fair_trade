
import React, { Component } from 'react';
import * as firebase from "firebase";

class Comments extends Component {
  /*gives us a reference to the databaseservice, 
  using ref() gets a specific reference, like post and storing in postsRef*/

  componentWillMount() {
  let postsRef = firebase.database().ref('posts'); 
  
    let _this = this;
  //postref gives us the update value whenever theres changes in database, realtime update
    postsRef.on('value', function(snapshot) {
      console.log(snapshot.val());
  
      _this.setState({
        posts: snapshot.val(),
        loading: false
        });
        });
      }
  
    render() {
      return (
        <div className="Comments">
          {this.props.children && React.cloneElement(this.props.children, {
        // https://github.com/ReactTraining/react-router/blob/v3/examples/passing-props-to-children/app.js#L56-L58
        firebase: firebase.database(),
        posts: this.state.posts,
        loading: this.state.loading
      })}
    </div>
  );
}
}


export default Comments;