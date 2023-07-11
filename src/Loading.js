import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';

const Loading = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/learn-more');
  };

  return (
    <div className="landing-page">
      <nav className='nav'>
        <ul>
          <li><Link className='link'   to="/">Home</Link></li>
          <li><Link className='link' to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="content">
     

        <h1 className='head'>Welcome to Fictional Product/Service</h1>
        <p className='data'>Introducing our amazing fictional product or service that will revolutionize your life.</p>
        {/* <button className="cta-button" onClick={handleLearnMoreClick}>Learn More</button> */}
        <button>
            <Link className='btn' to={"/learn"}>Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default Loading;
