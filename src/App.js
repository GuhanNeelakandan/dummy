
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import CreateStudent from './components/student/CreateStudent';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />


          <div id="layoutSidenav_content">
            <main>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/table' element={<Table />} />
                <Route path='/create/student' element={<CreateStudent />} />
              </Routes>
            </main>
          </div>



        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
