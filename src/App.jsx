import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Location from "../components/Location";
import { Tools } from "../components/Tools";

export default function App() {
  return (
  <main className=" mx-auto max-w-7xl">

    <Header/>
    <About/>
    <hr/>
    <Location/>
    <hr/>
    <Tools/>
    <Footer/>
  </main>
  )
}