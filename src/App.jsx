import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MoviesView from "./pages/MoviesView";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MoviesView />
    </div>
  );
};

export default App;
