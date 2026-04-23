import { Route, Switch, useLocation } from "wouter";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "./components/Preloader";

// Pages
import { WebGLScene } from "./components/webgl/Scene";
import { Home } from "./pages/Home";
import { InvestmentSummit } from "./pages/InvestmentSummit";
import { InvestmentSummitDetails } from "./pages/InvestmentSummitDetails";
import { Sfere } from "./pages/Sfere";
import { Reason } from "./pages/Reason";
import { InvestmentChallenge } from "./pages/InvestmentChallenge";
import { Competitions } from "./pages/Competitions";
import { CompetitionApplications } from "./pages/CompetitionApplications";
import { Contact } from "./pages/Contact";
import { SfereKeynotes } from "./pages/SfereKeynotes";
import { SfereRecentKeynotes } from "./pages/SfereRecentKeynotes";
import { HiddenContact } from "./pages/HiddenContact";
import { NotFound } from "./pages/NotFound";

function ScrollToTop() {
  const [location] = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (prevLocation.current === location) return;
    prevLocation.current = location;

    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("mve_preloaded");
    }
    return true;
  });

  const handlePreloaderComplete = () => {
    setLoading(false);
    sessionStorage.setItem("mve_preloaded", "true");
  };

  return (
    <div className="flex flex-col min-h-screen font-sans relative bg-[#0A0A0A] overflow-x-hidden grain">
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={handlePreloaderComplete} key="preloader" />
        )}
      </AnimatePresence>

      <ScrollToTop />

      {/* Background WebGL Particle Scene */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <WebGLScene />
      </motion.div>

      {!loading && (
        <motion.div
          className="flex flex-col min-h-screen relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grow flex flex-col relative z-20">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/investment-summit" component={InvestmentSummit} />
              <Route path="/investment-summit/details" component={InvestmentSummitDetails} />
              <Route path="/sfere" component={Sfere} />
              <Route path="/reason" component={Reason} />
              <Route path="/investment-challenge" component={InvestmentChallenge} />
              <Route path="/competitions" component={Competitions} />
              <Route path="/competitions/forms" component={CompetitionApplications} />
              <Route path="/contact" component={Contact} />
              <Route path="/contact/keynotes/:id">{(params) => <HiddenContact params={params} />}</Route>
              <Route path="/sfere/keynotes/:year" component={SfereKeynotes} />
              <Route path="/sfere/recent-keynotes" component={SfereRecentKeynotes} />
              <Route component={NotFound} />
            </Switch>
          </div>

          <div className="relative z-30">
            <Footer />
          </div>

          {/* Floating Bottom Nav — above everything */}
          <Navbar />
        </motion.div>
      )}
    </div>
  );
}

export default App;
