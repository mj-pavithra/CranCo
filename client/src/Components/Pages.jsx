import React from 'react';
import '../css/pages.css';

const Pages = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7']; // Add more items to test scrolling

  return (
    <div className="topContainer">
    <h1 className="pageTitle">Pages</h1>
      <div className="fullContainer1">
        <div className="fullContainer">
          {items.map((item, index) => (
            <div key={index} className="eachProfile">
              <img className="proPic" src="/assets/audir8.jpeg" alt="logo" />
              <h1 className="pageName">{item}</h1>
            
            </div>
            
          ))}
          
        </div>
        
          <button className="addPagebtn">add page</button>
      </div>
    </div>
  );
};

export default Pages;
