import React from 'react';
import SideBar from './main/sidebar/Side-bar';
import Main from './main/main';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <SideBar />
      <Main />
    </div>
  );
};

export default App;
