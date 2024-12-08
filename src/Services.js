import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: #f9f9f9;
  color: #333;
  font-family: "Berlin Sans FB", sans-serif;
`;

const SectionHeader = styled.h1`
  font-size: 2.5rem;
  color: #0056b3;
  margin-bottom: 1.5rem;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 700px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const SectionCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #0073e6;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
`;

const KeyDetails = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 0.9rem;
  color: #444;
  text-align: left;
  width: 100%;

  li {
    margin-bottom: 0.5rem;
  }

  li strong {
    color: #0056b3;
  }
`;


const ServicesPage = () => {
    const services = [
      {
        icon: "🩺",
        title: "Health Services",
        description: "Hospitals, clinics, and mental health resources.",
        details: [
          { label: "Operating Hours", value: "24/7" },
          { label: "Contact", value: "617-555-1234" },
          { label: "Location", value: "Across Boston" },
        ],
      },
      {
        icon: "🛡️",
        title: "Safety Services",
        description: "Police, fire departments, and emergency contacts.",
        details: [
          { label: "Hotline", value: "911" },
          { label: "Non-Emergency", value: "311" },
          { label: "Website", value: "boston.gov/safety" },
        ],
      },
      {
        icon: "🎓",
        title: "Education Support",
        description: "Scholarships, grants, and student assistance programs.",
        details: [
          { label: "Contact", value: "edu-support@boston.edu" },
          { label: "Hours", value: "9 AM - 5 PM, Mon-Fri" },
        ],
      },
      {
        icon: "♻️",
        title: "Environmental Services",
        description: "Recycling, waste management, and clean-up programs.",
        details: [
          { label: "Website", value: "boston.gov/recycle" },
          { label: "Contact", value: "617-555-6789" },
        ],
      },
      {
        icon: "💼",
        title: "Job Assistance",
        description: "Job training, career counseling, and employment agencies.",
        details: [
          { label: "Support Hours", value: "10 AM - 6 PM, Mon-Fri" },
          { label: "Email", value: "jobsupport@boston.gov" },
        ],
      },
      {
        icon: "🚗",
        title: "Transportation Assistance",
        description: "Subsidized fares, accessible transportation, and transit schedules.",
        details: [
          { label: "Contact", value: "transit-help@boston.gov" },
          { label: "Hours", value: "6 AM - 10 PM, Mon-Sun" },
          { label: "Website", value: "boston.gov/transportation" },
        ],
      },
    ];
  
    return (
      <PageContainer>
        <SectionHeader>Boston Public Services</SectionHeader>
        <SectionDescription>
          Explore essential health, safety, and community resources available in
          Boston to support your needs.
        </SectionDescription>
        <GridContainer>
          {services.map((service, index) => (
            <SectionCard key={index}>
              <CardIcon>{service.icon}</CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <KeyDetails>
                {service.details.map((detail, i) => (
                  <li key={i}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </li>
                ))}
              </KeyDetails>
            </SectionCard>
          ))}
        </GridContainer>
      </PageContainer>
    );
  };
  
  export default ServicesPage;
  