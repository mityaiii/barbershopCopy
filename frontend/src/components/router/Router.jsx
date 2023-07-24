import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from "react-router";
import Home from '../../pages/Home';
import Market from '../../pages/Market';
import PriceList from '../../pages/PriceList';
import ProductPage from '../../pages/ProductPage';
import NewsListPage from '../../pages/NewsListPage';
import NewsPage from '../../pages/NewsPage';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/price-list' element={ <PriceList/> }/>
        <Route path='/market'>
          <Route path='' element={ <Market />}/>
          <Route path='product/:id' element={ <ProductPage/> }/>
        </Route>
        <Route path='/news-list'>
          <Route path='' element={ <NewsListPage/> }/>
          <Route path='news/:id' element={ <NewsPage/> }/>
        </Route>
      </Routes>
    </>
  )
}
