import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSong from './components/AddSong';
import ViewAll from './components/ViewAll';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AddSong/>}/>
            <Route path="/viewall" element={<ViewAll/>}/>
            <Route path="/search" element={<Search/>}/>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
