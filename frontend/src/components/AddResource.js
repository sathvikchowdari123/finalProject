import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddResource = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [externalLink, setExternalLink] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
      console.log('Form Submitted:', { name, description, type, externalLink, blogContent });
        if (!name || !description || !type || !externalLink ) {
      // Handle validation error (e.g., display error message)
      console.log('All fields are required');
      return;
      }
      try {
      // Send data to the server (assuming you're using Axios)
      const response = await axios.post('http://localhost:3001/add-resource', { name, description, type, externalLink, blogContent });
        console.log('Resource added successfully:', response.data);
        if (response.status === 200) {
         toast.success('resource added  successfully')
      }
     
      
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Error adding resource:', error);
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="user-container">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className="card custom-card">
              <div className="card-body">
                <div>
                  <FontAwesomeIcon icon={faUser} className="user-icon" />
                </div>
                <h5 className="card-title">Add Resource</h5>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      value={description}
                      placeholder="Description"
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={type}
                      onChange={handleTypeChange}
                      required
                    >
                      <option value="">Select Resource Type</option>
                      <option value="blog">Blog</option>
                      <option value="video">Video</option>
                      <option value="external">External Website Link</option>
                    </select>
                  </div>
                    <div className="form-group">
                      <input
                        type="url"
                        className="form-control"
                        value={externalLink}
                        placeholder="External Link"
                        onChange={(e) => setExternalLink(e.target.value)}
                        required
                      />
                    </div>
                  {type === 'blog' && (
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        value={blogContent}
                        placeholder="Blog Content"
                        onChange={(e) => setBlogContent(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  )}
                
              
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResource;
