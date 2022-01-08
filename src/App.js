// import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Navbar from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Resources from "./pages/Resources/Resources";
import Journal from "./pages/ShakesJournal/journal";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/Contact Us/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
//import Hover from "./pages/ShakesJournal/hover";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/resources" component={Resources} />
            <Route path="/shakesjournal" component={Journal} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
