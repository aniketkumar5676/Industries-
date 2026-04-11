/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import FTLService from "./pages/FTLService";
import ShippingService from "./pages/ShippingService";
import RailService from "./pages/RailService";
import AirService from "./pages/AirService";
import ProjectLogisticsService from "./pages/ProjectLogisticsService";
import WarehousingService from "./pages/WarehousingService";
import FreightForwardingService from "./pages/FreightForwardingService";
import Media from "./pages/Media";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="mandal-theme">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/ftl" element={<FTLService />} />
            <Route path="services/shipping" element={<ShippingService />} />
            <Route path="services/rail" element={<RailService />} />
            <Route path="services/air" element={<AirService />} />
            <Route path="services/project" element={<ProjectLogisticsService />} />
            <Route path="services/warehousing" element={<WarehousingService />} />
            <Route path="services/freight" element={<FreightForwardingService />} />
            <Route path="industries" element={<Industries />} />
            <Route path="media" element={<Media />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
