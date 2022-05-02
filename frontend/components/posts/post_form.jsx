import React from 'react';
import { Avatar } from '@mui/material'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.post.body,
      photoFile: null,
      photoUrl: this.props.post.photoUrl,
      user_id: this.props.post.user_id
    }

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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);    
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    formData.append('post[user_id]', this.state.user_id);



    if(this.props.formType === 'Create Post'){
      this.props.createPost(formData).then(
        () => this.props.closeModal()
      )
    }else{
      formData.append('post[id]', this.props.post.id);
      this.props.updatePost(formData)
      .then(this.setState({ body: "" }))
      .then(
        () => this.props.closeModal()
      )
    }

  }

  update(field){
    return e =>(
      this.setState({
        [field]: e.currentTarget.value
      })    
    )      
  }
  
  render() {
    
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className=""/> : null;
    
    return (
      <div className='form__box'>   
          <div className="form__header">
              <h2>{this.props.formType}</h2>               
          </div>

          <div  className="form__avatar">
                <Avatar src={window.demouserimg}/>
                <p> a/A Student</p>
          </div>
        
          <div >
            <div onClick={this.props.closeModal} className="close-x">X</div> 
            <form>
                <div className='from__input' >
                <input 
                  value={this.state.body}
                  placeholder={`What's on your mind`} 
                  onChange={this.update('body')}/>                    
                </div>               

                <div className="from__file">
                    <input type="file" 
                      className="custom-file-input" 
                      onChange={this.handleFile}/>                  
                    <p> Add photos </p>                    
                    {preview}                    
                </div>
                                    
                <button 
                  className="btn btn--primary bn--post" 
                  onClick={this.handleSubmit} > 
                      Post
                </button>              
            </form>
          </div>  
      </div>
    );
  }
}
  
export default PostForm;
  