import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header6/header";
import HeroNavigation from "./Components/hero/";
import AboutUs from "./Components/about/";
import Testimonials from "./Components/testimonials/";
import Leadership from "./Components/leadership/";
import TracksPage from "./Components/track/";
import EventsPage from "./Components/event/";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        
        <Route 
          path="/" 
          element={(
            <>
              <HeroNavigation /> 
              <AboutUs />          
              <Testimonials />       
            </>
          )} 
        />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
