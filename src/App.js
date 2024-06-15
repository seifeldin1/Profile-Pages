import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UserProfile from "./userProfile.js";
import ProfilePage from "./profiles.js";
import NotFound from "./serverNotFound.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<ProfilePage/>}></Route>
        <Route path='/profiles/:id' element={<UserProfile/>}></Route>
        <Route path='*' element ={<NotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
