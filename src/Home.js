import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar"; 
import bTownLogo from "./images/b-town-logo.png"; 
import cityImg from "./images/city.jpg";


const HomeWrp = styled.div`
  font-family: "Berlin Sans FB", sans-serif;
`;

const MainSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px 50px;
`;

const LogoImg = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 20px;
`;

const IntSec = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin: 20px auto;
  padding-left: 80px;
`;

const Inttxt = styled.p`
  font-size: 22px;
  margin: 10px 0;
  color: #555;
`;

const AbtSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #444;
    max-width: 900px;
  }
`;

const CityImage = styled.img`
  width: 100%;
  height: auto;
`;

const Home = () => {
  return (
    <HomeWrp>
      <Navigation />
      <MainSec>
        <LogoImg src={bTownLogo} alt="B-Town Logo" />
        <IntSec>
          <Inttxt>
            One-stop solution for all your academic needs, miscellaneous services. This is it.
          </Inttxt>
          <Inttxt>
            Anything of everything. One stop. B-town.
          </Inttxt>
        </IntSec>
        <SearchBar size="large" />
      </MainSec>

      <AbtSec>
        <h2>About</h2>
        <p>
          Welcome to B-Town: Your Academic and Everyday Lifesaver in Boston! <br />
          B-Town is your go-to guide for exploring Boston! Discover must-visit spots, navigate transport services like
          the subway, commuter rail, ferries, and The Ride, and stay updated on live events. Access essential emergency
          resources, including ambulance, police, and health services. Students can find academic help with library
          timings, major bookstores, and tutorials on skills like writing papers or typing efficiently. B-Town makes
          Boston easier for everyone to explore and enjoy!
        </p>
      </AbtSec>
      <CityImage src={cityImg} alt="City View" />
    </HomeWrp>
  );
};

export default Home;
