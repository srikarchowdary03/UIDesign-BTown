import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BostonSub from "./images/BostonSub.jpg";
import OrangeLine from "./images/orangeLine.jpg";
import RedLine from "./images/redLine.jpg";
import ashRed from "./images/ashRed.jpg";
import GreenLine from "./images/greenLine.png";
import BlueLine from "./images/BlueLine.jpg";
import SilverLine from "./images/silverLine.webp";
import red from "./images/red.webp";
import redTrain from "./images/redTrain.jpg";
import orange from "./images/orange.jpg";
import blue from "./images/blue.jpg";
import green from "./images/green.jpg";
import silver from "./images/silver.jpg";


const SubwayWrapper = styled.div`
  font-family: "Berlin Sans FB", sans-serif;
  padding: 20px;
`;

const HeroSection = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BostonSub});
  background-size: cover;
  background-position: center;
  height: 400px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroHeading = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const LineButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
`;

const LineButton = styled.button`
  background-color: ${(props) => props.color || "#000"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }

  &.active {
    border: 3px solid #fff;
  }
`;

const LineSection = styled.div`
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
`;

const LineContent = styled.div`
  flex: 1;
  min-width: 300px;
`;

const LineHeading = styled.h2`
  color: ${(props) => props.color || "#000"};
  margin-bottom: 10px;
  font-size: 32px;
`;

const LineDescription = styled.p`
  color: #444;
  font-size: 16px;
  margin-bottom: 20px;
`;

const StationCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
  width: 90%;
  margin: 20px auto;
`;

const StationInfo = styled.div`
  margin-bottom: 20px;
`;

const StationName = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

const NextArrival = styled.div`
  font-size: 14px;
  color: #555;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubwayLineGraphic = styled.div`
  height: 5px;
  width: 100%;
  background-color: ${(props) => props.color || "#000"};
  margin: 20px 0;
`;

const MapImage = styled.img`
  width: 100%; 
  max-width: 400px;
  border-radius: 10px;
  margin: 10px auto;
  display: block; 
`;

const mockStationsData = {
  Red: [
    { stationName: "Alewife", minutesUntilArrival: 3 },
    { stationName: "Davis", minutesUntilArrival: 5 },
    { stationName: "Porter", minutesUntilArrival: 7 },
    { stationName: "Harvard", minutesUntilArrival: 9 },
    { stationName: "Central", minutesUntilArrival: 12 },
    { stationName: "Kendall/MIT", minutesUntilArrival: 6 },
    { stationName: "Charles/MGH", minutesUntilArrival: 2 },
    { stationName: "Park Street", minutesUntilArrival: 5 },
    { stationName: "Downtown Crossing", minutesUntilArrival: 9 },
    { stationName: "South Station", minutesUntilArrival: 2 },
    { stationName: "Broadway", minutesUntilArrival: 8 },
    { stationName: "Andrew", minutesUntilArrival: 9 },
    { stationName: "JFK/UMass", minutesUntilArrival: 6 },
    { stationName: "North Quincy", minutesUntilArrival: 10 },
    { stationName: "Wollaston", minutesUntilArrival: 5 },
    { stationName: "Quincy Center", minutesUntilArrival: 8 },
    { stationName: "Quincy Adams", minutesUntilArrival: 12 },
    { stationName: "Braintree", minutesUntilArrival: 15 },
    { stationName: "Savin Hill", minutesUntilArrival: 4 },
    { stationName: "Fields Corner", minutesUntilArrival: 11 },
    { stationName: "Shawmut", minutesUntilArrival: 9 },
    { stationName: "Ashmont", minutesUntilArrival: 7 },
  ],
  Green: [
    { stationName: "Lechmere", minutesUntilArrival: 4 },
    { stationName: "Science Park", minutesUntilArrival: 6 },
    { stationName: "North Station", minutesUntilArrival: 8 },
    { stationName: "Haymarket", minutesUntilArrival: 10 },
    { stationName: "Government Center", minutesUntilArrival: 12 },
    { stationName: "Park Street", minutesUntilArrival: 6 },
    { stationName: "Boylston", minutesUntilArrival: 10 },
    { stationName: "Arlington", minutesUntilArrival: 15 },
    { stationName: "Copley", minutesUntilArrival: 4 },
    { stationName: "Hynes Convention Center", minutesUntilArrival: 9 },
    { stationName: "Kenmore", minutesUntilArrival: 2 },
    { stationName: "Fenway", minutesUntilArrival: 6 },
    { stationName: "Longwood", minutesUntilArrival: 14 },
    { stationName: "Brigham Circle", minutesUntilArrival: 18 },
    { stationName: "Heath Street", minutesUntilArrival: 6 },
  ],
  Orange: [
    { stationName: "Oak Grove", minutesUntilArrival: 5 },
    { stationName: "Malden Center", minutesUntilArrival: 7 },
    { stationName: "Wellington", minutesUntilArrival: 10 },
    { stationName: "Assembly", minutesUntilArrival: 12 },
    { stationName: "Sullivan Square", minutesUntilArrival: 14 },
    { stationName: "Community College", minutesUntilArrival: 8 },
    { stationName: "North Station", minutesUntilArrival: 7 },
    { stationName: "Haymarket", minutesUntilArrival: 9 },
    { stationName: "State", minutesUntilArrival: 11 },
    { stationName: "Downtown Crossing", minutesUntilArrival: 14 },
    { stationName: "Chinatown", minutesUntilArrival: 8 },
    { stationName: "Tufts Medical Center", minutesUntilArrival: 10 },
    { stationName: "Back Bay", minutesUntilArrival: 7 },
    { stationName: "Massachusetts Avenue", minutesUntilArrival: 5 },
    { stationName: "Ruggles", minutesUntilArrival: 4 },
    { stationName: "Roxbury Crossing", minutesUntilArrival: 6 },
    { stationName: "Jackson Square", minutesUntilArrival: 10 },
    { stationName: "Stony Brook", minutesUntilArrival: 9 },
    { stationName: "Green Street", minutesUntilArrival: 15 },
    { stationName: "Forest Hills", minutesUntilArrival: 5 },
  ],
  Blue: [
    { stationName: "Bowdoin", minutesUntilArrival: 3 },
    { stationName: "Government Center", minutesUntilArrival: 5 },
    { stationName: "State", minutesUntilArrival: 7 },
    { stationName: "Aquarium", minutesUntilArrival: 10 },
    { stationName: "Maverick", minutesUntilArrival: 12 },
    { stationName: "Airport", minutesUntilArrival: 7 },
    { stationName: "Wood Island", minutesUntilArrival: 9 },
    { stationName: "Orient Heights", minutesUntilArrival: 14 },
    { stationName: "Suffolk Downs", minutesUntilArrival: 8 },
    { stationName: "Beachmont", minutesUntilArrival: 6 },
    { stationName: "Revere Beach", minutesUntilArrival: 12 },
    { stationName: "Wonderland", minutesUntilArrival: 8 },
  ],
  Silver: [
    { stationName: "South Station", minutesUntilArrival: 3 },
    { stationName: "Courthouse", minutesUntilArrival: 5 },
    { stationName: "World Trade Center", minutesUntilArrival: 7 },
    { stationName: "Silver Line Way", minutesUntilArrival: 10 },
    { stationName: "Logan Airport Terminals", minutesUntilArrival: 12 },
    { stationName: "Chelsea", minutesUntilArrival: 7 },
  ],
};

const Subway = () => {
  const [stationsData, setStationsData] = useState(mockStationsData);
  const [loading, setLoading] = useState(true);
  const [selectedLine, setSelectedLine] = useState("Red");
  const location = useLocation();

  const fetchStationsData = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setStationsData(mockStationsData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchStationsData();
  }, [fetchStationsData]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const line = params.get("line");
    if (line && mockStationsData[line]) {
      setSelectedLine(line);
    }
  }, [location.search]);

  const renderLineSection = (lineName, color, description, mapUrls) => {
    const lineData = stationsData[lineName];
  
    return (
      <LineSection key={lineName}>
        <LineContent>
          <LineHeading color={color}>{lineName} Line</LineHeading>
          <LineDescription>{description}</LineDescription>
          {lineData && lineData.length > 0 ? (
            lineData.map((station, index) => (
              <StationCard key={index}>
                <SubwayLineGraphic color={color} />
                <StationInfo>
                  <StationName>{station.stationName}</StationName>
                  <NextArrival>
                    Next train arriving in <strong>{station.minutesUntilArrival} min</strong>
                  </NextArrival>
                </StationInfo>
              </StationCard>
            ))
          ) : (
            <p>No upcoming trains for this line. Please try again later.</p>
          )}
        </LineContent>
        <div>
          {mapUrls.map((url, index) => (
            <MapImage key={index} src={url} alt={`${lineName} Line Map ${index + 1}`} />
          ))}
        </div>
      </LineSection>
    );
  };
  

  return (
    <SubwayWrapper>
      <HeroSection>
        <HeroHeading>Boston Subway System</HeroHeading>
        <Description>
          Discover Boston's extensive subway system. Check real-time train
          arrivals for every line and learn about the history of each route.
        </Description>
      </HeroSection>

      <LineButtonsWrapper>
        {["Red", "Green", "Blue", "Orange", "Silver"].map((line) => (
          <LineButton
            key={line}
            color={
              line === "Red"
                ? "#ff6347"
                : line === "Green"
                ? "#008000"
                : line === "Blue"
                ? "#0000ff"
                : line === "Orange"
                ? "#ffa500"
                : "#c0c0c0"
            }
            onClick={() => setSelectedLine(line)}
            className={selectedLine === line ? "active" : ""}
          >
            {line} Line
          </LineButton>
        ))}
      </LineButtonsWrapper>

      {loading ? (
        <p>Loading train data...</p>
      ) : (
        <>
          {selectedLine === "Red" &&
            renderLineSection(
              "Red",
              "#ff6347",
              "The Red Line serves neighborhoods from Cambridge, Somerville, and Downtown Boston.",
              [RedLine, ashRed, red, redTrain]
            )}
          {selectedLine === "Green" &&
            renderLineSection(
              "Green",
              "#008000",
              "The Green Line branches through Allston, Brookline, and downtown areas.",
              [GreenLine,green]
            )}
          {selectedLine === "Blue" &&
            renderLineSection(
              "Blue",
              "#0000ff",
              "The Blue Line connects Wonderland to Bowdoin.",
              [BlueLine,blue]
            )}
          {selectedLine === "Orange" &&
            renderLineSection(
              "Orange",
              "#ffa500",
              "The Orange Line connects Forest Hills to Oak Grove.",
              [OrangeLine,orange]
            )}
          {selectedLine === "Silver" &&
            renderLineSection(
              "Silver",
              "#c0c0c0",
              "The Silver Line serves the Seaport District and Logan Airport.",
              [SilverLine, silver]
            )}
        </>
      )}
    </SubwayWrapper>
  );
};

export default Subway;
