import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} /> {/* 👈 root'a koy */}
      </Routes>
    </Router>
  );
}

export default App;
