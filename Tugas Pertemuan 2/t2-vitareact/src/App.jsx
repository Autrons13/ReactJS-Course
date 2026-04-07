import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Team from "./page/Team";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Team" element={<Team />} />
        </Routes>
      </BrowserRouter>

      {/*content*/}
    </>
  );
}

export default App;
