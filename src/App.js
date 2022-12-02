
import './App.css';
import NavBar from './Component/NavBar';
import Code from './Component/Code';
import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import EditUser from './Component/EditUser';
function App() {
  return (
    <>
    <BrowserRouter >
    {/* <h1>Wellcome to react</h1> */}
    <NavBar/>

    <Routes>
    <Route path="/" element={<Code/>}/>
    <Route path="/all" element={<AllUsers/>}/>
    <Route path="/add" element={<AddUser/>}/>
    <Route path="/edit/:id" element={<EditUser />} />
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
