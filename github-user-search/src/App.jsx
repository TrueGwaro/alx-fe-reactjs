import { useState } from "react";
import { searchUsers } from "./services/githubService";

function App() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    const results = await searchUsers(username);
    setUsers(results);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Search GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;