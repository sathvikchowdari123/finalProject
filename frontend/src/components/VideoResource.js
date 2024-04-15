import React, { useState } from 'react';

// VideoResource component
const VideoResource = ({ name, description, externalLink }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="col-md-3 mb-3">
        <div className="card shadow-sm resource-card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <>
          <div className="modal-backdrop show"></div>
          <div
            className="modal "
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{name}</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={handleModalClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src={`${externalLink}`}
                      allowFullScreen
                      title={name}
                    ></iframe>
                  </div>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VideoResource;
