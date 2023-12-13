import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PulseBackground from "./components/PulseBackground";
import { Toaster } from "sonner";

export default function App() {
  return (
    <main className='relative w-full max-h-screen px-5 mx-auto max-w-7xl'>
      <Toaster position='top-center' richColors />

      <Router>
        <Navbar />
        <PulseBackground />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}
