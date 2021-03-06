//src/appliction/Home/index.js
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import {Top,Tab,TabItem} from './style';

function Home(props) {

  const { route } = props;
  console.log(props);

  return (
    <div>
      <Top>
        <span className="iconfont menu">☰</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">〇</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      { renderRoutes(route.routes) }
    </div>
  )
}

export default React.memo(Home);