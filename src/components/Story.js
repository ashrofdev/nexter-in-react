import React from 'react';

const Story = () => {
  return (
    <div className="story">
      <div className="left">
        {'gallery'}
        <div className="back">
          <img alt="" src={require('./img/story-1.jpeg')}/>
        </div>
        <div className="hp">
          <img alt="" src={require('./img/story-2.jpeg')}/>
        </div>
      </div>
      <div className="right">
        <p>HAPPY CUSTOMERS</p>
        <h1>“ The best decision of our lives”</h1>
        <p className="story">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
         distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta ! </p>
         <button>FIND YOUR OWN HOME</button>
      </div>
    </div>
  );
}

export default Story;