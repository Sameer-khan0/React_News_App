import React, { Component } from 'react'

export class newsitem extends Component {
  render() {
    let {title, discription, imageUrl,newidentification,time,arthur, Source}=this.props;
    return (
      <div>
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {Source?Source:'new'}
  </span></h5>
    <p className="card-text"> {discription}..by { arthur ? arthur:"anknown"} on {time}</p>
    <a href={newidentification} className="btn-sm btn btn-primary">Read more</a>
  </div>
  </div>
</div>
</div>
    );    
}
  
}

export default newsitem
