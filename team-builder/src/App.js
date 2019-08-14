import React, { useState } from "react";
import "./App.css";
import TeamMember from "./components/TeamMember";
import Form from "./components/Form";
import data from "./data";

function App() {
  const [teamMember, setTeamMember] = useState(data);

  const addNewMember = member => {
    console.log(member);
    setTeamMember([...teamMember, member]);
  };
  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <TeamMember memberList={teamMember} />
    </div>
  );
}

export default App;
