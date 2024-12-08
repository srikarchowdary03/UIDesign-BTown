import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.size === "small" ? "flex-end" : "center")};
  width: 100%;
`;

const SearchInput = styled.input`
  padding: ${(props) => (props.size === "small" ? "10px 15px" : "12px 20px")};
  font-size: ${(props) => (props.size === "small" ? "14px" : "16px")};
  width: ${(props) => (props.size === "small" ? "180px" : "400px")};
  max-width: ${(props) => (props.size === "small" ? "250px" : "500px")}; /* Limit the maximum width */
  border: 2px solid #ccc;
  border-radius: 25px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SearchBar = ({ size = "medium" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.toLowerCase().replace(/\s+/g, "");

    const keywords = {
      redline: "/subway?line=Red",
      greenline: "/subway?line=Green",
      blueline: "/subway?line=Blue",
      orangeline: "/subway?line=Orange",
      silverline: "/subway?line=Silver",

      transport: "/transport",
      commuter: "/transport",
      ferry: "/transport",
      theride: "/transport",
      buses:"/transport",
      ride:"/transport",

      events: "/events",
      music: "/events?category=Music",
      sports: "/events?category=Sports",
      festivals: "/events?category=Festivals",
      arts: "/events?category=Arts%20&%20Theater",
      theater: "/events?category=Arts%20&%20Theater",
      comedy: "/events?category=Comedy",
      family: "/events?category=Family",
      charity: "/events?category=Charity",
      holiday: "/events?category=Holiday",

      academics: "/academics",
      libraries: "/academics#libraries",
      bookstores: "/academics#bookstores",
      resources: "/academics#resources",
      Education: "/academics",
      Online: "/academics",
      Tutorials: "/academics",

      services: "/services",
      hospital: "/services",
      safety: "/services",
      police: "/services",
    };

    const route = keywords[query];
    if (route) {
      navigate(route);
    } else {
      alert("No matching results found. Please try a different keyword.");
    }
  };

  return (
    <SearchContainer size={size}>
      <form onSubmit={handleSearch}>
        <SearchInput
          size={size}
          type="text"
          placeholder="Search for subway lines, events, academics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </SearchContainer>
  );
};

export default SearchBar;
