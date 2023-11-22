
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import { Header } from "./common/header";
import { LandingPage } from "./pages/landingPage";
import { LoginPage } from "./pages/loginPage";
import { Footer } from "./common/footer";
import { CssFlexbox } from "./pages/cssFlexbox";
import { CssPositioning } from "./pages/cssPositioning";
import { CssUnits } from "./pages/cssUnits";
import { CssSpecificity } from "./pages/cssSpecificity";
import { CssBackgroundColor } from "./pages/cssBackgroundColor";
import { LayoutPage } from "./pages/layoutPage";

function App() {
  return (
    <Router>
      <div id="bodyContainer">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/flexBox" element={<CssFlexbox />} />
          <Route path="/positioning" element={<CssPositioning />} />
          <Route path="/units" element={<CssUnits />} />
          <Route path="/specificity" element={<CssSpecificity />} />
          <Route path="/backgroundColor" element={<CssBackgroundColor />} />
          <Route path="/layout" element={<LayoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
