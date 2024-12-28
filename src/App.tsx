import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import ResidentialSolutions from "./pages/ResidentialSolutions";
import CommercialSolutions from "./pages/CommercialSolutions";
import SpecializedServices from "./pages/SpecializedServices";
import OfficeBuildings from "./pages/commercial/OfficeBuildings";
import HospitalitySector from "./pages/commercial/HospitalitySector";
import HealthcareIndustry from "./pages/commercial/HealthcareIndustry";
import EducationalSector from "./pages/commercial/EducationalSector";
import QuoteRequest from "./pages/QuoteRequest";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quote-request" element={<QuoteRequest />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/residential" element={<ResidentialSolutions />} />
          <Route path="/commercial" element={<CommercialSolutions />} />
          <Route path="/specialized" element={<SpecializedServices />} />
          <Route path="/commercial/office-buildings" element={<OfficeBuildings />} />
          <Route path="/commercial/hospitality-sector" element={<HospitalitySector />} />
          <Route path="/commercial/healthcare-industry" element={<HealthcareIndustry />} />
          <Route path="/commercial/educational-sector" element={<EducationalSector />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;