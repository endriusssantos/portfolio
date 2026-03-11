import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 pt-20 text-white">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}

export default App;
