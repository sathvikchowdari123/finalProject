
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddUser from './pages/AddUser';
import HomePage from './pages/HomePage';
import PasswordResetPage from './pages/PasswordResetPage';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/user' element={<AddUser />}/>
          <Route path='/home/:role' element={<HomePage />} />
          <Route path='/auth/:role' element={<AdminPage/>}/>
          <Route path='/password-reset/:id' element={<PasswordResetPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
