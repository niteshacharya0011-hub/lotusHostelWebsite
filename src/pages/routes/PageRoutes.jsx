import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  Rules,
  Facilities,
  Gallery,
  Contact,
  PageNotFound,
} from "../index";

import WhatsAppBtn from "../../components/whatsAppBtn/WhatAppBtn.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Layout = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404" || location.pathname === "/PageNotFound" || location.pathname === "/page-not-found";

  return (
    <>
      <Outlet />
      {!isNotFoundPage && <WhatsAppBtn />}
      {!isNotFoundPage && <Footer />}
    </>
  );
};

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;