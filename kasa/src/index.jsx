import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Error404 from './pages/Error404'
import Home from './pages/Home'
import Housing from './pages/Housing'
import Footer from './components/Footer'
import Header from './components/Header'
import styles from '../src/style.module.css'

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Housing/:id" element={<Housing />} />
          <Route path="/Error404" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />    
    </Router>
  </React.StrictMode>
)