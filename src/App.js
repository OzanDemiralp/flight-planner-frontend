import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';
import BackgroundImage from './components/BackgroundImage';
function App() {
  return (
    <Router>
      <BackgroundImage>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </BackgroundImage>
    </Router>
  );
}

export default App;
