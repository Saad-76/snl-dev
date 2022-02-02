import React from 'react';
import "./subscribe.css"

const Subscribe=()=> {
  return (
      <>
      <div className="subscribe-display">

          <input className="input-email-style" type="email" placeholder="email@address.com" />
          <button className="subscribe-button-style">Subscribe</button>
      </div>
      </>
  );
}

export default Subscribe;
