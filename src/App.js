import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-orange-100 grid grid-cols-1 grid-rows-12 ">
      <Header className="row-span-3" />
      <Main className="row-span-8" />
      <Footer className="row-span-1" />
    </div>
  );
}

export default App;
