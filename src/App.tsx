import React from "react";
import Header from "./components/Header/Header";
import Introduction from "./components/Sections/Introduction/Introduction";
import Science from "./components/Sections/Science/Science";
import Hemispheres from "./components/Sections/Hemispheres/Hemispheres";
import Celebrations from "./components/Sections/Celebrations/Celebrations";
import Traditions from "./components/Sections/Traditions/Traditions";
import Conclusion from "./components/Sections/Conclusion/Conclusion";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <Science />
        <Hemispheres />
        <Celebrations />
        <Traditions />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
