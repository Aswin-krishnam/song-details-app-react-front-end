import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSong from './components/AddSong';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AddSong/>}/>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
