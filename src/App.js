import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Create';
import Home from './Home';

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
