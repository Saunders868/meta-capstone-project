import "./App.css";
import Layout from "./components/layout";
import Home from "./screens/Home";
import Reservation from "./screens/Reservation";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Reservation />} path="/reservation" />
      </Routes>
    </Layout>
  );
}

export default App;
