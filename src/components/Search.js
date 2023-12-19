import React, { useState } from "react";

const usersWithDomains = [
  { firstName: "Machine Learning", id: 1, domains: ["ML1", "ML2", "ML3"] },
  { firstName: "Web Development", id: 2, domains: ["Web1", "Web2", "Web3"] },
  { firstName: "App Development", id: 3, domains: ["App1", "App2", "App3"] },
  { firstName: "Kubernet", id: 4, domains: ["Kube1", "Kube2", "Kube3"] },
  { firstName: "Ios Develpment", id: 5, domains: ["iOS1", "iOS2", "iOS3"] },
  { firstName: "Data Science", id: 6, domains: ["DS1", "DS2", "DS3"] },
  {
    firstName: "Artificial Intelligence",
    id: 7,
    domains: ["AI1", "AI2", "AI3"],
  },
  { firstName: "Competitive coding", id: 8, domains: ["CC1", "CC2", "CC3"] },
  { firstName: "DSA", id: 9, domains: ["DSA1", "DSA2", "DSA3"] },
  {
    firstName: "Java Development",
    id: 10,
    domains: ["Java1", "Java2", "Java3"],
  },
  { firstName: "Other", id: 11, domains: ["Other1", "Other2", "Other3"] },
];

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [buttonColor, setButtonColor] = useState("green");

  const searchBarStyle = {
    marginTop: "16%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    overflow: "hidden",
    width: "600px",
  };

  const inputStyle = {
    borderRadius: "20px",
    padding: "15px",
    fontSize: "18px",
    color: "black",
    marginBottom: "15px",
    width: "90%",
    alignSelf: "center",
  };

  const dropdownStyle = {
    borderRadius: "20px",
    padding: "15px",
    fontSize: "18px",
    color: "black",
    marginBottom: "15px",
    width: "90%",
    alignSelf: "center",
  };

  const buttonStyle = {
    background: buttonColor,
    border: "none",
    borderRadius: "15px",
    width: "50%",
    padding: "15px 15px",
    cursor: "pointer",
    fontSize: "18px",
    alignSelf: "center",
    transition: "background-color 0.3s ease-in-out",
  };

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
    setSelectedUser(null);
    setSelectedDomain("");
  };

  const handleUserChange = (e) => {
    const userId = parseInt(e.target.value, 10);
    const selectedUser = usersWithDomains.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
    setSelectedDomain("");
  };

  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
  };

  const handleSearchClick = () => {
    setButtonColor((prevColor) => (prevColor === "green" ? "blue" : "green"));

    console.log("Search Text:", searchItem);
    console.log("Selected User:", selectedUser);
    console.log("Selected Domain:", selectedDomain);

    // Additional functionality for searching or navigation can be added here
  };

  return (
    <div style={searchBarStyle} className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search by Name..."
        style={inputStyle}
        className="search-input"
        value={searchItem}
        onChange={handleInputChange}
      />

      <select
        style={dropdownStyle}
        onChange={handleUserChange}
        value={selectedUser ? selectedUser.id : ""}
      >
        <option value="" disabled>
          Select a Domain
        </option>
        {usersWithDomains.map((user) => (
          <option key={user.id} value={user.id}>
            {user.firstName}
          </option>
        ))}
      </select>

      {selectedUser && (
        <select
          style={dropdownStyle}
          onChange={handleDomainChange}
          value={selectedDomain}
        >
          <option value="" disabled>
            Select an Expertise
          </option>
          {selectedUser.domains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      )}

      <br />
      <br />
      <button
        style={buttonStyle}
        className="search-button"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
