import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import VisualBreak from "./components/VisualBreak";
import PhotoPrinting from "./components/PhotoPrinting";
import MarriagePhotography from "./components/MarriagePhotography";
import EverydayServices from "./components/EverydayServices";
import About from "./components/About";
import EnquiryForm from "./components/EnquiryForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-surface-base selection:bg-brand/30 selection:text-brand">
          <Header />
          <main>
            <Hero />
            <TrustStrip />
            <Services />
            <VisualBreak />
            <PhotoPrinting />
            <MarriagePhotography />
            <EverydayServices />
            <About />
            <EnquiryForm />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
