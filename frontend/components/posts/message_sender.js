import { Avatar } from '@mui/material'
// import {React, useState} from 'react';
import React from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

class MessageSender extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: '',
      photoFile: null,
      photoUrl: null,
      user_id: this.props.post.user_id
    }
    // console.log(this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);    
    if (this.state.photoFile) {

      formData.append('post[photo]', this.state.photoFile);
    }
    formData.append('post[user_id]', this.state.user_id);

    for (var value of formData.values()) {
      // console.log(value);
   }
    // console.log(formData);
    this.props.createPost(formData);

    this.setState({
      body: '',
      photoFile: null,
      photoUrl: null,
      user_id: this.props.post.user_id
    })

    
  }

  update(field){
    return e =>(
      // debugger
      this.setState({
        [field]: e.currentTarget.value
      })    
    )
    
  }

  // componentDidMount(){
  //   this.props.fetchPosts();
  // }

  render(){
   
    return (
      <div className='messagesender'>
        <div className='messagesender__top'>
           <Avatar src={window.demouserimg}/>
           <form>
               {/* need to work on setting value from state */}
              <input className='messagesender__input' value={this.state.body}
              placeholder={`What's on your mind`} onChange={this.update('body')} />
              <input type="file"
              placeholder={`image URL(option)`} onChange={this.handleFile}/>
              <button onClick={this.handleSubmit} type="submit">Hidden submit</button>
           </form>
        </div>     
        
        <div className='messagesender__buttom'>
           {/* <div className='messagesender__option'>
             <VideocamIcon style={{color: "red"}} />
              <h3>LIve Video</h3>
           </div> */}
           <div className='messagesender__option'>
             <PhotoLibraryIcon style={{color: "green"}} />
              <h3>Photo/Video</h3>
           </div>
           <div className='messagesender__option'>
             <InsertEmoticonIcon style={{color: "orange"}} />
              <h3>Feeling/Activity</h3>
           </div>
        </div>
      </div>
    )
  } 
}

export default MessageSender