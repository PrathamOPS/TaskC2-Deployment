import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Articles from './components/Articles'
import Tutorials from './components/Tutorials'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Post from './pages/Post'
import './App.css'
import './Auth.css'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Articles />
      <Tutorials />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App