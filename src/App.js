import Navbar from "./components/Navbar";
import { Calcinput } from "./pages/Calcinput";
import { Report } from "./pages/Result";
import { Route, Routes } from "react-router-dom";
import { Privateroute } from "./routes/Privateroutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Calcinput />} />
        <Route
          path="/report"
          element={
            <Privateroute>
              <Report />
            </Privateroute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
