import React from 'react';

const Head = () => {
  return (
    <div className="head">
      <div className="main">
        main header section
        <img className="logo" alt="" src={require('./img/logo.png')} />
        <div className="heading">
          <p>YOUR OWN HOME</p>
          <h1>The ultimate personal freeedom</h1>
          <button>FIND YOUR OWN HOME</button>
        </div>
      </div>
      <div className="realtor">
        realtor section
      </div>
    </div>
  );
}

export default Head;