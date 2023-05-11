import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import { useNavigate } from 'react-router-dom';
import Repo from './repo/Repo';
import './main.scss';
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isFetching = useSelector(state => state.repos.isFetching);
  const currentPage = useSelector(state => state.repos.currentPage);
  const totalCount = useSelector(state => state.repos.totalCount);
  const perPage = useSelector(state => state.repos.perPage);
  const isFetchError = useSelector(state => state.repos.isFetchError);
  const [searchValue, setSerchValue] = useState('');
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];
  const navigate = useNavigate();

  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  function searchHandler() {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  }

  return (
    <div>
      {
        isFetchError && 
          <h2>Произошла ошибка</h2>
      }
      <div className='search'>
        <input type="text" className="search-input" value={ searchValue } onChange={ (e) => setSerchValue(e.target.value) }/>
        <button onClick={ () => searchHandler() } className='search-btn'>Search</button>
      </div>
      { 
        isFetching === false ?
          repos.map(repo => <Repo repo={ repo } key={ repo.id } />)
            :
          <div className='fetching'>
          
          </div>
      }
      <div className='pages'>
        {
          pages.map((page, index) => <span key={ index } className={ currentPage == page ? "current-page" : "page" } onClick={ () => dispatch(setCurrentPage(page)) }>{ page }</span>)
        }
      </div>
    </div>
  );
};

export default Main;