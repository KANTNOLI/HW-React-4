import { Route, Routes } from "react-router";
import Pagination from "./components/Pagination";
import Students from "./components/Students";
import News from "./components/News";
function App() {
  return (
    <>
      <Pagination></Pagination>
      <Routes>
        <Route path="/" element={<>Home page</>} />
        <Route path="/students/*" element={<Students />} />
        <Route path="/news/*" element={<News />} />
        <Route path="*" element={<p>error</p>} />
      </Routes>
    </>
  );
}

export default App;
