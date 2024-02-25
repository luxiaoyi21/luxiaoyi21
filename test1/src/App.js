// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './global'

//引入封装的路由
import RouterList from './routers/index';

const App = () =>
{
  return (
    <React.Router.HashRouter>
      <RouterList />
    </React.Router.HashRouter>
  )
}

export default App;
