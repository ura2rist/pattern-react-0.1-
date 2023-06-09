import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getContributions, getCurrentRepo } from '../actions/repos';
import './card.scss';

const Card = (props) => {
  const navigate = useNavigate();
  const { username, reponame } = useParams();
  const [ repo, setRepo ] = useState({owner: {}});
  const [ contributors, setContributors ] = useState([]);
  
  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo);
    getContributions(username, reponame, setContributors);
  }, [])

  return (
    <div>
      <button onClick={ () => navigate(-1)} className='back-btn'>back</button>
      <div className="card">
        <img src={repo.owner.avatar_url} alt="" />
        <div className="name">{ repo.name }</div>
        <div className="stars">{ repo.stargazers_count }</div>
      </div>
      {
        contributors.map((c, index) => 
          <div key={ index }>{ index + 1 }.{ c.login }</div>
        )
      }
    </div>
  );
};

export default Card;