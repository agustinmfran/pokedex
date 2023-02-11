import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="bg-orange-100 grid grid-cols-1 grid-rows-12">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
