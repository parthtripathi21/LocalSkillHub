import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="pt-30 pb-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}