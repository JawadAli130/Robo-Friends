import React, { useState } from "react";
import "./App.css";
import CardList from "./Components/CardList";
import Header from "./Components/Header";
import { Robots } from "./Components/Robots";

function App() {
  const [filteredRobots, setFilteredRobots] = useState(Robots);

  const onSearchChange = (e) => {
    const filteredRobots = Robots.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });
    setFilteredRobots(filteredRobots);
  };

  return (
    <div>
      <Header onSearchChange={onSearchChange} />
      <CardList Robots={filteredRobots} />
    </div>
  );
}

export default App;
