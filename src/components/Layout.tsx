import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import FloatingContact from "./FloatingContact";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full z-[60]">
        <div className="w-full h-1 hazard-stripe" />
        <TopBar />
      </div>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
