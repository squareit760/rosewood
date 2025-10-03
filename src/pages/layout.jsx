import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <Outlet />
      <Footer />

      {/* Floating CTA Buttons */}
      
    </>
  );
};

export default MainLayout;
