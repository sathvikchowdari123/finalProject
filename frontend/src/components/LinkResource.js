import React from 'react'
const LinkResource = ({ name, description, externalLink }) => (
  <div className="col-md-3 mb-3">
    <div className="card resource-card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={externalLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
    </div>
  </div>
);
export default LinkResource;