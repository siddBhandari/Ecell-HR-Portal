import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailVerify from './pages/EmailVerify';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ComplaintForm from "./pages/complaint";

function App() {
  return (
    <>
    <ToastContainer position="top-center" autoClose="2500"/>
    <Router>
      <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path ="/signup" element={<Signup/>} />
        <Route exact path ="/login" element={<Login/>} />
        <Route exact path="/complaint" element={<ComplaintForm />} />
        <Route exact path ="/verifymail" element={<EmailVerify/>} />
        {/* <Route exact path="*" element={<Error />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
