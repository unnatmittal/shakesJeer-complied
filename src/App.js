import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Resources from "./pages/Resources/Resources";
import Journal from "./pages/ShakesJournal/journal";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs/contact";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Preloader/loader";
import Hover from "./pages/ShakesJournal/hover";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/shakesjournal" component={Journal} />
            <Route exact path="/contact-us" component={ContactUs} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
  // return <Loader />;
}

export default App;
