import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
