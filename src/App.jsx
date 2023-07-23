import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Performance from "./pages/Performance";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                   <Route path="/" element={<Dashboard/>} />
                   <Route path="/News" element={<News/>} />
                   <Route path="/Performance" element={<Performance/>} />
                   <Route path="/Transactions" element={<Transactions/>} />
                   <Route path="/Settings" element={<Settings/>} />
                   <Route path="/Support" element={<Support/>} />
                   <Route path="/Sidebar" element={<Sidebar/>} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
