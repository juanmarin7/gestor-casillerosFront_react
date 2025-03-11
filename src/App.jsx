import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Registro from "./pages/Registro";
// import Dashboard from "./pages/Dashboard";
// import Historial from "./pages/Historial";


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                {/* <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/historial" element={<Historial />} />
                <Route path="/casillero" element={<Casillero />} />
                <Route path="/" element={<Dashboard />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
