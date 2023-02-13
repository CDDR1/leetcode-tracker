import Navbar from "./components/Navbar";
import QuestionList from "./components/QuestionList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        {/* Saved Qestions Page */}
        <div className="">
          <h1 className="text-4xl text-center my-20">Saved Questions</h1>
          <QuestionList />
        </div>
      </div>
    </>
  );
};

export default App;
