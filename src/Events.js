import React, { useEffect, useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import events from "./images/events.jpg";

const EventsWrapper = styled.div`
  font-family: "Berlin Sans FB", sans-serif;
`;

const HeroSection = styled.div`
  background: url(${events}) no-repeat center center;
  background-size: cover;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroHeading = styled.h1`
  font-size: 48px;
  margin: 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
`;

const HeroSubheading = styled.p`
  font-size: 18px;
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const CategoryButton = styled.button`
  font-size: 14px;
  margin: 5px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.active ? "black" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#007bff")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const EventsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const EventCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const EventImageOverlay = styled.div`
  position: relative;
  height: 200px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8));
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const EventTag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff6347;
  color: white;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 5px;
`;

const EventDetails = styled.div`
  padding: 20px;
`;

const EventTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 10px 0;
`;

const EventInfo = styled.p`
  font-size: 14px;
  margin: 5px 0;
  color: #555;
`;

const EventButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #007bff;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [classification, setClassification] = useState("");
  const location = useLocation(); // Access query parameters from the URL

  const categories = useMemo(
    () => ["Music", "Sports", "Festivals", "Arts & Theater", "Comedy", "Family", "Charity", "Holiday"],
    []
  );

  const fetchEventsForCategory = async (category = "") => {
    const baseUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=K7VBrxoUs9nkBCtaxFdOZLPIHFUpklFb&city=Boston`;
    const url = category ? `${baseUrl}&classificationName=${category}` : baseUrl;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      return (
        data._embedded?.events.map((event) => ({
          id: event.id,
          name: event.name,
          date: event.dates.start.localDate,
          time: event.dates.start.localTime,
          location: event._embedded.venues[0]?.name || "N/A",
          link: event.url,
          category:
            event.classifications[0]?.segment?.name || "Uncategorized",
          image: event.images && event.images.length > 0 ? event.images[0].url : "https://via.placeholder.com/300x200",
        })) || []
      );
    } catch (error) {
      console.error("Error fetching events:", error);
      return [];
    }
  };

  const fetchAllEvents = useCallback(async () => {
    setLoading(true);
    try {
      const allEvents = [];
      for (const category of categories) {
        const events = await fetchEventsForCategory(category);
        allEvents.push(...events);
        if (allEvents.length >= 30) break; // Limit to 30 events
      }
      setEvents(allEvents.slice(0, 30)); // Ensure only 30 events are displayed
    } catch (error) {
      console.error("Error fetching all events:", error);
    } finally {
      setLoading(false);
    }
  }, [categories]);

  const fetchEventsForQuery = useCallback(async () => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    setClassification(category || "");
    setLoading(true);
    if (!category) {
      await fetchAllEvents();
    } else {
      const fetchedEvents = await fetchEventsForCategory(category);
      setEvents(fetchedEvents);
    }
    setLoading(false);
  }, [location.search, fetchAllEvents]);

  useEffect(() => {
    fetchEventsForQuery();
  }, [fetchEventsForQuery]);

  return (
    <EventsWrapper>
      <HeroSection>
        <HeroHeading>Boston's Exciting Events</HeroHeading>
        <HeroSubheading>Explore music, sports, festivals, and more happening near you!</HeroSubheading>
      </HeroSection>

      <FilterSection>
        {["All", ...categories].map((category) => (
          <CategoryButton
            key={category}
            active={classification === category || (!classification && category === "All")}
            onClick={() =>
              (window.location.href = category === "All" ? "/events" : `/events?category=${category}`)
            }
          >
            {category}
          </CategoryButton>
        ))}
      </FilterSection>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Loader />
        </div>
      ) : events.length > 0 ? (
        <EventsSection>
          {events.map((event) => (
            <EventCard key={event.id}>
              <EventImageOverlay>
                <EventImage src={event.image} alt={event.name} />
                <EventTag>{event.category}</EventTag>
              </EventImageOverlay>
              <EventDetails>
                <EventTitle>{event.name}</EventTitle>
                <EventInfo>
                  <strong>Date:</strong> {event.date}
                </EventInfo>
                <EventInfo>
                  <strong>Time:</strong> {event.time || "N/A"}
                </EventInfo>
                <EventInfo>
                  <strong>Location:</strong> {event.location}
                </EventInfo>
                <EventButton href={event.link} target="_blank">
                  Learn More
                </EventButton>
              </EventDetails>
            </EventCard>
          ))}
        </EventsSection>
      ) : (
        <p>No events found for the selected category.</p>
      )}
    </EventsWrapper>
  );
};

export default Events;
