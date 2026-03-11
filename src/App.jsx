import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 pt-20 text-white">
      <Header />
      <section className="flex min-h-screen flex-1 flex-col items-center justify-center">
        <Home />
      </section>
      <section className="min-h-screen">
        <About />
      </section>
    </main>
  );
}

export default App;
