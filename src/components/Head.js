import React from 'react';

const Head = () => {
  return (
    <div className="head">
      <div className="main">
        <img className="logo" alt="" src={require('./img/logo.png')} />
        <div className="heading">
          <p>YOUR OWN HOME</p>
          <h1>The ultimate personal freeedom</h1>
          <button>FIND YOUR OWN HOME</button>
        </div>
      </div>
      <div className="realtor">
        <h2>TOP 3 REALTORS</h2>
        <div className="real">
        <img alt="" src={require('./img/realtor-1.jpeg')}/>
          <div className="data">
            <p>Eric Feinman</p>
            <span>256 HOUSES SOLDS</span>
          </div>
        </div>
        <div className="real">
        <img alt="" src={require('./img/realtor-2.jpeg')}/>
          <div className="data">
            <p>Kim Brown</p>
            <span>212 HOUSES SOLDS</span>
          </div>
        </div>
        <div className="real">
        <img alt="" src={require('./img/realtor-3.jpeg')}/>
          <div className="data">
            <p>Toby Ramsey</p>
            <span>198 HOUSES SOLDS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;