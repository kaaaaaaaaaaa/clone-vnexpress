import "./App.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Banner />
      <Header />
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
