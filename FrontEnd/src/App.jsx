import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import HomePage from "./frontend/pages/HomePage";
import AboutUsPage from "./frontend/pages/AboutUsPage";
import BlogPage from "./frontend/pages/BlogPage";
import ContactUsPage from "./frontend/pages/ContactUsPage";

import Footer from "./frontend/components/Footer";
import NavScrollExample from "./frontend/components/NavScrollExample";
import NewsPage from "./frontend/pages/NewsPage";
import { PrimeReactProvider } from "primereact/api";
import OrganizationPage from "./frontend/pages/OrganizationPage";
import ScrollToTop from "./frontend/components/ScrollToTop";

function App() {
  return (
    <MantineProvider>
      <PrimeReactProvider>
        <div className="App">
          {/* ScrollToTop component placed here */}

          <Router>
            <NavScrollExample />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/organization" element={<OrganizationPage />} />
            </Routes>
          </Router>
          <Footer />
        </div>
      </PrimeReactProvider>
    </MantineProvider>
  );
}

export default App;
