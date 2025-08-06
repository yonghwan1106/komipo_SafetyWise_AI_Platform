import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Monitoring from './pages/Monitoring';
import LearningCenter from './pages/LearningCenter';
import Reports from './pages/Reports';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        <Route path="/monitoring" element={
          <Layout>
            <Monitoring />
          </Layout>
        } />
        <Route path="/learning" element={
          <Layout>
            <LearningCenter />
          </Layout>
        } />
        <Route path="/reports" element={
          <Layout>
            <Reports />
          </Layout>
        } />
        <Route path="/profile" element={
          <Layout>
            <Profile />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;