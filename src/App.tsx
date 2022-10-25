import "./scss/style.scss";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Ordering from "./components/Ordering/Ordering";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Ordering />
      <Footer />
    </div>
  );
}

export default App;
