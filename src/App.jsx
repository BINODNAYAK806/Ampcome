// import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Appointments from './components/Appointments';
import Dashboard from './components/dashboard';
import Home from './components/Home';

function App() {
  return (
    <div>
      {/* <Home/> */}
      {/* <Appointments/> */}
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/Appointments' element={<Appointments/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

      </Routes>


    </div>
  );
}

export default App;
