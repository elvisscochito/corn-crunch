import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing.jsx";
import LinkInBio from "../pages/LinkInBio.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/link-in-bio" element={<LinkInBio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
