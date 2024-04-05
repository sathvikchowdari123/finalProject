
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddUser from './pages/AddUser';
import HomePage from './pages/HomePage';
import PasswordResetPage from './pages/PasswordResetPage';
import AdminPage from './pages/AdminPage';
import EventCreation from './pages/EventCreation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/UserContext';
function App() {


  return (
    <UserProvider>
    <div className="App">
        <BrowserRouter>
           <ToastContainer
          position="top-right"
          style={{ marginTop: '3rem' }}
          limit={1}
        />
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/user' element={<AddUser />}/>
          <Route path='/home/:role' element={<HomePage />} />
          <Route path='/auth/:role' element={<AdminPage/>}/>
          <Route path='/password-reset/:id' element={<PasswordResetPage />} />
          {/* <Route path='/event-creation' element={<EventCreation/>}/> */}
        </Routes>
      </BrowserRouter>
      </div>
      </UserProvider>
  );
}

export default App;
