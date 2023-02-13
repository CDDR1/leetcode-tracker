import Navbar from "./components/Navbar";
import SavedQuestions from "./pages/SavedQuestions";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<SavedQuestions />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
