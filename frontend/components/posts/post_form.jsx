import React from 'react';



class PostForm extends React.Component {
    constructor(props) {
      super(props);
    //   this.state = this.props.post;
  
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
    //   e.preventDefault();
    //   this.props.action(this.state);
    }
  
    update(field) {
    //   return e => this.setState({ [field]: e.currentTarget.value });
    }
  
    render() {
      return (
        <div  className="signup-box">
          <h2>Create Post</h2>
          {/* <form onSubmit={this.handleSubmit}>
            <label>
              Title
              <input
                type='text'
                value={this.state.title}
                onChange={this.update('title')}
              />
            </label>
            <label>
              Body
              <textarea
                value={this.state.body}
                onChange={this.update('body')}
              />
            </label>
            <button type='submit' value={this.props.formType} />
          </form> */}
        </div>
      );
    }
  }
  
  export default PostForm;
  