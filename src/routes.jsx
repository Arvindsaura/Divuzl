import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<SignUp />} />
    <Route path="contact" element={<Contact />} />
    <Route path="services" element={<Services />} />
    <Route path="services/:slug" element={<ServiceDetail />} />
    <Route path="case-studies" element={<CaseStudies />} />
    <Route path="case-studies/:id" element={<CaseStudyDetail />} />
    <Route path="projects" element={<Projects />} />
    <Route path="projects/:id" element={<ProjectDetail />} />
    <Route path="blogs" element={<Blogs />} />
    <Route path="team" element={<Team />} />
    
    <Route path="blogs/:id" element={<BlogDetail />} />
  </Routes>
);

export default AllRoutes;
