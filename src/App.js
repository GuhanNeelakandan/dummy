
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import CreateStudent from './components/student/CreateStudent';
import ViewStudent from './components/student/ViewStudent';
import { UserProvider } from './AppContext';
import Graph from './components/Graph';
import Profit from './components/Profit';
import Loss from './components/Loss';

function App() {
  return (

    <BrowserRouter>
    <UserProvider value={'bala'}>
    <div >
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />


          <div id="layoutSidenav_content">
            <main>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='graph' element={<Graph/>}/>
                    <Route path='profit' element={<Profit/>}/>
                    <Route path='loss' element={<Loss/>}/>
                </Route>
                <Route path='/table' element={<Table />} />
                <Route path='/create/student' element={<CreateStudent />} />
                <Route path='/view/student/:id' element={<ViewStudent />} />
              </Routes>
            </main>
          </div>



        </div>
      </div>
    </UserProvider>
      
    </BrowserRouter>

  );
}

export default App;
