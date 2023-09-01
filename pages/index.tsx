import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="bg-whitemin-h-screen font-SF scroll-smooth">
      <NavBar />
      <Profile />
      <Projects />

      <div className=" drop-shadow-2xl border bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-9"></div>
      <Experiences />
      <div className=" drop-shadow-2xl border bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-9"></div>
      <Skills />
      <div className="filler h-96"></div>
      <Footer />
    </main>
  );
}
