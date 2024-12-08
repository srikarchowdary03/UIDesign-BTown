import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import transportImage from "./images/transportImage.jpg";
import commuterMap from "./images/commuterMap.jpg";
import subwayMap from "./images/subwayMap.jpg";
import ferryMap from "./images/ferryMap.jpg";
import bus from "./images/bus.jpg";
import ride from "./images/ride.webp";

const TransportWrapper = styled.div`
  font-family: "Berlin Sans FB", sans-serif;
  background-color: #f9f9f9;
`;

const HeroSection = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${transportImage});
  background-size: cover;
  background-position: center;
  height: 450px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroHeading = styled.h1`
  font-size: 52px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const HeroTagline = styled.p`
  font-size: 20px;
  max-width: 700px;
`;

const SectionWrapper = styled.div`
  padding: 60px 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  max-width: 1200px;
  margin: 40px auto;
`;

const SectionHeading = styled.h2`
  text-align: center;
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
`;

const TransportSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
`;

const SectionContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const SectionTitle = styled.h3`
  font-size: 28px;
  color: #007bff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  &::before {
    content: attr(data-icon);
    font-size: 32px;
    margin-right: 10px;
  }
`;

const DetailList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;

  li {
    margin: 10px 0;
    font-size: 16px;
    color: #444;
  }
`;

const ContentImage = styled.img`
  flex: 1;
  max-width: 400px;
  width: 90%;
  border-radius: 10px;
  margin: 20px;
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  margin: 20px 0;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ExternalLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Transport = () => {
  return (
    <TransportWrapper>
      <HeroSection>
        <HeroHeading>Boston’s Public Transportation</HeroHeading>
        <HeroTagline>
          Explore Boston effortlessly with our guide to public transit: The RIDE, Commuter Rail, Ferry, Subway, and Bus Routes.
        </HeroTagline>
      </HeroSection>

      <SectionWrapper>
        <SectionHeading>Public Transportation Options</SectionHeading>

        <TransportSection>
          <SectionContent>
            <SectionTitle data-icon="🚇">Subway</SectionTitle>
            <p>
              The MBTA Subway, known as the “T,” includes the Red, Green, Orange, Blue, and Silver Lines. It connects major
              landmarks, universities, and neighborhoods in Boston and beyond.
            </p>
            <DetailList>
              <li><strong>Operating Hours:</strong> 5:00 AM - Midnight, 7 days a week</li>
              <li><strong>Fares:</strong> $2.40 per trip with a CharlieCard, $2.90 without</li>
              <li><strong>Major Lines:</strong> Red, Green, Blue, Orange, Silver</li>
              <li><strong>Connections:</strong> Provides links to Commuter Rail, buses, and ferry services.</li>
            </DetailList>
            <ButtonLink to="/subway">View Real-Time Subway Schedules</ButtonLink>
          </SectionContent>
          <ContentImage src={subwayMap} alt="Subway Map" />
        </TransportSection>

        <TransportSection>
          <SectionContent>
            <SectionTitle data-icon="🚌">Bus Routes</SectionTitle>
            <p>
              The MBTA bus network serves the Greater Boston area with over 170 routes, providing convenient and affordable transportation.
            </p>
            <DetailList>
              <li><strong>Operating Hours:</strong> 5:00 AM - 1:00 AM, 7 days a week</li>
              <li><strong>Fares:</strong> $1.70 with a CharlieCard, $2.00 without</li>
              <li><strong>Routes:</strong> Local routes, express services, and crosstown connections available.</li>
              <li><strong>Accessibility:</strong> All buses are wheelchair accessible.</li>
            </DetailList>
            <ExternalLink href="https://www.mbta.com/schedules/bus" target="_blank">
              Learn More About Bus Routes
            </ExternalLink>
          </SectionContent>
          <ContentImage src={bus} alt="Bus Routes Map" />
        </TransportSection>

        <TransportSection>
          <SectionContent>
            <SectionTitle data-icon="🚐">The RIDE</SectionTitle>
            <p>
              The RIDE is a paratransit service offering door-to-door transportation for eligible individuals. It operates
              across Greater Boston and provides accessible vehicles for those with disabilities.
            </p>
            <DetailList>
              <li><strong>Operating Hours:</strong> 5:00 AM - 1:00 AM, 7 days a week</li>
              <li><strong>Fares:</strong> $3.35 - $5.60 per trip</li>
              <li><strong>Eligibility:</strong> Service for individuals with disabilities.</li>
              <li><strong>Booking:</strong> Reservations required at least one day in advance.</li>
            </DetailList>
            <ExternalLink href="https://www.mbta.com/accessibility/the-ride" target="_blank">
              Learn More About The RIDE
            </ExternalLink>
          </SectionContent>
          <ContentImage src={ride} alt="The RIDE" />
        </TransportSection>

        <TransportSection>
          <SectionContent>
            <SectionTitle data-icon="🚆">Commuter Rail</SectionTitle>
            <p>
              The MBTA Commuter Rail connects Boston to neighboring towns and cities, offering easy access to places like
              Worcester, Lowell, and Newburyport.
            </p>
            <DetailList>
              <li><strong>Operating Hours:</strong> Vary by line, typically 4:30 AM - 1:00 AM</li>
              <li><strong>Fares:</strong> Based on zones, starting at $2.40 up to $13.25 per trip</li>
              <li><strong>Connections:</strong> Links Boston with suburban areas and other transit systems.</li>
              <li><strong>Facilities:</strong> Free Wi-Fi and bike accommodations on most trains.</li>
            </DetailList>
            <ExternalLink href="https://www.mbta.com/schedules/commuter-rail" target="_blank">
              Check Commuter Rail Routes
            </ExternalLink>
          </SectionContent>
          <ContentImage src={commuterMap} alt="Commuter Rail Map" />
        </TransportSection>

        <TransportSection>
          <SectionContent>
            <SectionTitle data-icon="⛴️">Ferry</SectionTitle>
            <p>
              Boston Harbor ferries provide scenic and efficient travel to Hingham, Hull, Logan Airport, and more.
            </p>
            <DetailList>
              <li><strong>Operating Hours:</strong> 6:00 AM - 8:00 PM, varying by route</li>
              <li><strong>Fares:</strong> $3.70 - $9.75 per trip</li>
              <li><strong>Routes:</strong> Services Boston Harbor Islands, Logan Airport, and commuter towns.</li>
              <li><strong>Scenic Value:</strong> Offers beautiful views of the Boston skyline.</li>
            </DetailList>
            <ExternalLink href="https://www.mbta.com/schedules/ferry" target="_blank">
              Explore Ferry Schedules
            </ExternalLink>
          </SectionContent>
          <ContentImage src={ferryMap} alt="Ferry Routes Map" />
        </TransportSection>
      </SectionWrapper>
    </TransportWrapper>
  );
};

export default Transport;
