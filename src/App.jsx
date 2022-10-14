import './App.css';
import { Box, CssBaseline } from "@mui/material";
import Nav from "./Nav/Nav";
import About from "./About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WorkOverview from "./Work/WorkOverview";
import Work from "./Work/Work";
import Contact from "./Contact";


function App() {
  return (
      <Router>
          <Box display="flex">
              <CssBaseline />
              <Nav />
              <Box minHeight='100vh' py={5} px={{ xs: 4, sm: 10 }}>
                  <Box height={{ xs: '40px', sm: '0px' }} />
                  <Routes>
                      <Route exact path="/contact" element={<Contact />} />
                      <Route exact path="/work/:workId" element={<Work />} />
                      <Route exact path="/work" element={<WorkOverview />} />
                      <Route exact path="/about" element={<About />} />
                      <Route exact path="/" element={<About />} />
                  </Routes>
              </Box>
          </Box>
      </Router>
  );
}

export default App;
