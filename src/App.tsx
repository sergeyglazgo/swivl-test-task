import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { CurrentUser } from './components/CurrentUser';
import { UserList } from './components/UserList';

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__content">
        <div className="App__content-container">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/:login" element={<CurrentUser />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
