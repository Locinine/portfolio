// src/App.js
import React from "react";
import SideNav from "./components/sidenav";

function App() {
  return (
    <div class="grid grid-cols-3 gap-4">
      <SideNav />
      <div class="col-span-2 bg-gray-400 px-4">Some Page Content Here</div>
    </div>
  );
}

export default App;
