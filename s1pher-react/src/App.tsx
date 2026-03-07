import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrototypesPage } from './pages/PrototypesPage';
import { FounderPage } from './pages/FounderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prototypes" element={<PrototypesPage />} />
        <Route path="/founder" element={<FounderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
