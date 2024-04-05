import React, { useState,useEffect } from 'react'
import SearchBar from './SearchBar';
import BlogResource from './BlogResource';
import VideoResource from './VideoResource';
import LinkResource from './LinkResource';
import axios from 'axios';
const ResourcesPage = () => {
  const [resources,setResources]=useState()
     const handleSearchChange = (event) => {
   
    console.log(event.target.value);
  };
  
    useEffect(() => {
console.log('hi from fetch resources')
      const fetchResources = async () => {
       console.log('from fetch resources')
       try {
         const response = await axios.get('http://localhost:3001/fetch-resources');
         if (!response) {
           throw new Error('Failed to fetch events');
         }
         const data = await response.data;
        
         setResources(data);
         
       }
       catch (error) {
         console.error(error);
       }
     };
     fetchResources();
   }, []);

  //   const resources = [
  //   { type: 'blog', title: 'Blog Post 1', description: 'Description of Blog Post 1', url: 'https://example.com/blogpost1' },
  //   { type: 'video', title: 'Video Tutorial 1', description: 'Description of Video Tutorial 1', videoUrl: 'https://youtu.be/YXjORp170Lg?si=qpsFpoT1xonePwB-' },
  //   { type: 'link', title: 'Website 1', description: 'Description of Website 1', websiteUrl: 'https://example.com/website1' },
  //   { type: 'blog', title: 'Blog Post 2', description: 'Description of Blog Post 2', url: 'https://example.com/blogpost2' },
  //   // Add more resource data as needed
  // ];

  // Filter resources based on type
const blogResources = resources ? resources.filter(resource => resource.type === 'blog') : [];
const videoResources = resources ? resources.filter(resource => resource.type === 'video') : [];
const linkResources = resources ? resources.filter(resource => resource.type === 'external') : [];
     const renderResources = (resourceComponents) => {
    const rows = [];
    for (let i = 0; i < resourceComponents.length; i += 4) {
      rows.push(
        <div className="row" key={i}>
          {resourceComponents.slice(i, i + 4)}
        </div>
      );
    }
    return rows;
  };

    return (
   <div className="container">
     
            <SearchBar onChange={handleSearchChange} />
             
      <h3>Blog Resources</h3>
      {renderResources(blogResources.map((resource, index) => (
        <BlogResource key={index} {...resource} />
      )))}

      <h3>Video Resources</h3>
      {renderResources(videoResources.map((resource, index) => (
        <VideoResource key={index} {...resource} />
      )))}

      <h3>Link Resources</h3>
      {renderResources(linkResources.map((resource, index) => (
        <LinkResource key={index} {...resource} />
      )))}
    </div>
  )
}

export default ResourcesPage;