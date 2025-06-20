import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Job from "./component/job/job";
import Upskill from "./component/upskill/upskill";
import Scheme from "./component/scheme/scheme";
import Community from "./component/community/community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/job" element={<Job />} />
        <Route path="/upskill" element={<Upskill />} />
        <Route path="/scheme" element={<Scheme />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  )
}

export default App;
