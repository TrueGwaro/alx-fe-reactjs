import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys cooking and traveling" />
      <UserProfile name="Clara" age={22} bio="Avid reader and musician" />
    </div>
  );
}

export default App;