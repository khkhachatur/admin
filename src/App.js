import "./App.css";

import HomePage from "./pages/HomePage/HomePage";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import AddArtist from "./pages/AddArtist/AddArtist";
import AddEvent from "./pages/AddEvent/AddEvent";
import AddArtWork from "./pages/AddArtWork/AddArtWork";

function App() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="homePanel">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="event" element={<AddEvent />} />
            <Route path="artist" element={<AddArtist />} />
            <Route path="artwork" element={<AddArtWork />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
