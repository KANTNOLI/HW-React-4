import { Route, Routes } from "react-router";
import Pagination from "./components/Pagination";
import Students from "./components/Students";
function App() {
  return (
    <>
      <Pagination></Pagination>
      <Routes>
        <Route path="/" element={<>Home comp asdjaskj fafklj</>} />
        <Route path="/students/*" element={<Students />} />
        <Route path="/news/*" element={<>news</>} />
        <Route path="*" element={<>error</>} />
      </Routes>
    </>
  );
}

export default App;
