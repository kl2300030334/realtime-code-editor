import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import Chatbot from './components/Chatbot'; 
import React, { useState } from 'react';


const AppRoutes = () => {
  const location = useLocation();

  const [users,setUsers]=useState([])
  const isEditorPage = location.pathname.startsWith('/editor');

  return (
    <>
      <Routes>
        <Route path="/" element={<Home setUsers={setUsers} users={users}/>} />
        <Route path="/editor/:roomId" 
        element={<EditorPage setUsers={setUsers} users={users} />} />
       
      </Routes>
      
      {!isEditorPage && <Chatbot />}
    </>
  );
};

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              },
            },
            error: {
              theme: {
                primary: '#ff5555',
              },
            },
          }}
        />
      </div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
