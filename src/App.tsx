import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaxClassGuide from "./pages/LetzTax/TaxClassGuide";
import IncomeTaxCalculator from "./pages/LetzTax/IncomeTaxCalculator";
import TaxDeadlines from "./pages/LetzTax/TaxDeadlines";
import NotFound from "./pages/NotFound";
import DocumentChecklist from "./pages/LetzTax/DocumentChecklist";
import LetzTaxHome from "./pages/LetzTax/LetzTaxHome";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/letztax" element={<LetzTaxHome />} />
        <Route path="/letztax/tax-class-guide" element={<TaxClassGuide />} />
        <Route
          path="/letztax/income-tax-calculator"
          element={<IncomeTaxCalculator />}
        />
        <Route path="/letztax/deadlines" element={<TaxDeadlines />} />
        <Route
          path="/letztax/document-checklist"
          element={<DocumentChecklist />}
        />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/letztax/tax-optimization" element={<TaxOptimization />} />
        <Route path="/letztax/cross-border" element={<CrossBorderInfo />} />
        <Route path="/letztax/tax-returns" element={<TaxReturns />} /> */}
        {/* <Route path="/letzwork" element={<LetzWork />} /> */}
        {/* <Route path="/letzedu" element={<LetzEdu />} /> */}
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
