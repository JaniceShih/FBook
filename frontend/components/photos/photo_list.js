import React from 'react'

class  PhotosList extends React.Component {

  render(){
    const {flexdirection, photo} = this.props;
    //  console.log(photo);

    return (      
      <div className={flexdirection}>          
          <div className='photorow__img'>
            <img src={photo} className="photos__img"/>      
          </div>       
          
      </div>
    )

  }
}

export default PhotosList