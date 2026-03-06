import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <main className="flex h-screen flex-col bg-slate-950 text-white">
      <Header />
      <section className="flex flex-1 items-center justify-center">
        <div className="mx-auto">
          <Home />
        </div>
      </section>
    </main>
  );
}

export default App;
