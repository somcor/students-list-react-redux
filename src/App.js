import React from 'react';
import StudentsList from './components/StudentsList/StudentList'
import AddBtn from './components/AddBtn/AddBtn'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <StudentsList />
        <AddBtn />
      </div>
    </div>
  );
}

export default App;
