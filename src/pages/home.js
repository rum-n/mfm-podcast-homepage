import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div className="main">
      <h1 className='title'>My First Million</h1>
      <h2 className='subheading'>A podcast for business geeks & idea junkies.</h2>
      <h2 className='latest'>Latest episode</h2>
      <iframe src="https://open.spotify.com/embed-podcast/show/3mliji9352UAk3XnWElnDV" width="80%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
}

export default Home;
