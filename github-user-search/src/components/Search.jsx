import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers(username, location, minRepos, 1);
      setUsers(data.items);
    } catch (err) {
      setError("Error fetching users");
    }

    setLoading(false);
  };

  const loadMore = async () => {
    const nextPage = page + 1;

    try {
      const data = await searchUsers(username, location, minRepos, nextPage);
      setUsers((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Error loading more users");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">GitHub Advanced User Search</h1>

      <form onSubmit={handleSearch} className="space-y-3">

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>

      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">

        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              width="60"
              className="rounded-full"
            />

            <div>
              <p className="font-semibold">{user.login}</p>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}

      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 bg-gray-800 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      )}

    </div>
  );
}

export default Search;