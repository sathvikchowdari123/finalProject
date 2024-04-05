import React, { useState } from 'react';

// BlogResource component
const BlogResource = ({ name, description, externalLink,blogContent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="col-md-3 mb-3">
        <div className="card resource-card shadow">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>Read More</button>
          </div>
        </div>
          </div>
          {showModal && (
              <>
        <div className="modal-backdrop show"></div>
        <div className="modal  " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content" >
              <div className="modal-header">
                <h5 className="modal-title">{name}</h5>
                <button type="button" className="close" onClick={handleModalClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                  <p>Description:{description}</p>
                  <p>{blogContent}</p>
                <a href={externalLink} target="_blank" rel="noopener noreferrer">Read Full Article</a>
              </div>
            </div>
          </div>
                  </div>
     </>
      )}

    </>
  );
};

export default BlogResource;
