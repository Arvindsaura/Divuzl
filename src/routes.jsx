import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:id" element={<ServiceDetail />} />
    <Route path="/case-studies" element={<CaseStudies />} />
    <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:id" element={<ProjectDetail />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blogs/:id" element={<BlogDetail />} />
  </Routes>
);

export default AllRoutes;
