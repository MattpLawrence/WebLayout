
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import { Header } from "./common/header";
import { LandingPage } from "./pages/landingPage";
import { LoginPage } from "./pages/loginPage";
import { Footer } from "./common/footer";

function App() {
  return (
    <Router>
      <div className="bodyContainer">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
