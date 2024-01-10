
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// components

import { Banner } from './pages/Banner'
import { Navbar } from './components/Navbar'
import { About } from './pages/About';
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import Footer from './components/Footer'
// bg-orange-300/20 min-h-[100vh]

const App = () => {

  return (
    <main className=' bg-orange-300/20 min-h-[100vh]'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

