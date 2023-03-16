import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
