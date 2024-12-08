import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 200px 10px 20px;
  position: fixed;
  top: 0;
  width: 98%;
  background-color: white;
  font-family: "Berlin Sans FB", sans-serif;
`;

const LeftNav = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const RightNav = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.active ? "white" : "black")};
  background-color: ${(props) => (props.active ? "black" : "transparent")};
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
  }
`;

const SearchContainer = styled.div`
  max-width: 250px; /* Limit search bar width */
`;

const Navigation = () => {
  const location = useLocation(); // Get the current location

  return (
    <NavBar>
      <LeftNav>
        <NavLink to="/" active={location.pathname === "/"}>
          HOME
        </NavLink>
      </LeftNav>
      <RightNav>
        <NavLink to="/transport" active={location.pathname === "/transport"}>
          Transport
        </NavLink>
        <NavLink to="/events" active={location.pathname === "/events"}>
          Events
        </NavLink>
        <NavLink to="/services" active={location.pathname === "/services"}>
          Services
        </NavLink>
        <NavLink to="/academics" active={location.pathname === "/academics"}>
          Academics
        </NavLink>

        {/* Add the Search Bar */}
        <SearchContainer>
          <SearchBar size="small" /> {/* Small Search Bar for Navigation */}
        </SearchContainer>
      </RightNav>
    </NavBar>
  );
};

export default Navigation;
