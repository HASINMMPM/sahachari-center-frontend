import About from "../components/About";
import Header from "../components/Header";
import Location from "../components/Location";

export default function App() {
  return (
  <main className=" mx-auto max-w-7xl">

    <Header/>
    <About/>
    <hr/>
    <Location/>
    <hr/>
  </main>
  )
}