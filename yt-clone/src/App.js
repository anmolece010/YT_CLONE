// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelDetail from "./Components/ChannelDetail";
import VideoDetail from "./Components/VideoDetail";
import SearchFeed from "./Components/SearchFeed";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
