import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar = ({ onChange }) => {
  return (
    <div className="container text-center mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6"> {/* Adjust the column width as needed */}
          <div className="input-group mb-3" style={{ width: '100%' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={onChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faSearch} /> {/* Use Font Awesome search icon */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
