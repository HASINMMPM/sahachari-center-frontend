import Footer from "../components/commen/Footer";
import Header from "../components/commen/Header";
import { Outlet } from "react-router";
import Samp from "../components/samp";

export default function App() {
  return (
    <main className=" mx-auto max-w-7xl">
      <Header />
      <Outlet/>
      <Footer />
    </main>
  );
}
