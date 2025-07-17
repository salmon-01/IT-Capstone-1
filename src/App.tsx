import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaxClassGuide from "./pages/LetzTax/TaxClassGuide";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/letztax/tax-class-guide" element={<TaxClassGuide />} />
        {/* <Route path="/letzwork" element={<LetzWork />} /> */}
        {/* <Route path="/letzedu" element={<LetzEdu />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
