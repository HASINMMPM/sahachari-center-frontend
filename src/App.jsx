import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router";

export default function App() {
  return (
    <main className=" mx-auto max-w-7xl">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
