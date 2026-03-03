import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import TechnologyPage from './pages/TechnologyPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AiFirstBlogPage from './pages/AiFirstBlogPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SmoothScrolling from './components/SmoothScrolling';
import { useLenis } from 'lenis/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

function App() {
  return (
    <Router>
      <SmoothScrolling>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/ai-first-consultancy-2026" element={<AiFirstBlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </SmoothScrolling>
    </Router>
  );
}

export default App;
