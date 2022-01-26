import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

//components 
import About from './About';
import Contact from './Contact';
import Main from './Main';

function App() {
  return (
     <Routes>
       <Route  path = "/" element = {<Main/>} />
       <Route path = "about" element = {<About/>} />
       <Route path = "contact" element = {<Contact/>} />
     </Routes>
  );
}

export default App;
