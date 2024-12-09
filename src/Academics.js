import React from "react";
import styled from "styled-components";
import { ReactTyped as Typed } from "react-typed";
import aca from "./images/aca.webp";

const PageContainer = styled.div`
  font-family: "Berlin Sans FB", sans-serif;
  background-color: #f9f9f9;
`;

const HeroSection = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${aca}) no-repeat center center;
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
  margin-bottom: 16px;
`;

const HeroSubheading = styled.div`
  font-size: 24px;
  margin-top: 10px;
`;

const Section = styled.section`
  padding: 20px 32px;
  background-color: ${(props) => props.background || "#fff"};
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.h2`
  font-size: 40px;
  color: #0056b3;
  text-align: center;
  margin-bottom: 32px;
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px 0;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 32px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  width: 300px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CardIcon = styled.div`
  font-size: 48px;
  color: #0073e6;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const ActionLink = styled.a`
  margin-top: 10px;
  color: #007bff;
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const scrollContainer = (direction, containerRef) => {
  if (containerRef.current) {
    const scrollAmount = direction === "left" ? -300 : 300;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

// Data Consolidation
const sectionsData = {
  libraries: [
    { icon: "📚", title: "Boston Public Library", description: "Historic library with extensive resources.", link: "https://www.bpl.org" },
    { icon: "📖", title: "Harvard Library", description: "World-renowned library with rich collections.", link: "https://library.harvard.edu" },
    { icon: "📚", title: "MIT Libraries", description: "Innovative resources for MIT.", link: "https://libraries.mit.edu" },
    { icon: "📚", title: "Tufts Library", description: "Comprehensive library system at Tufts University.", link: "https://tischlibrary.tufts.edu" },
    { icon: "📚", title: "Snell Library", description: "Flagship library at Northeastern University.", link: "https://library.northeastern.edu" },
  ],
  bookstores: [
    { icon: "📘", title: "Brookline Booksmith", description: "Wide selection of books.", link: "https://www.brooklinebooksmith.com" },
    { icon: "📗", title: "Harvard Book Store", description: "Rare and academic books.", link: "https://www.harvard.com" },
    { icon: "📕", title: "Trident Booksellers", description: "Books, food, and a community hub.", link: "https://www.tridentbookscafe.com" },
    { icon: "📘", title: "Porter Square Books", description: "Curated selection of books.", link: "https://www.portersquarebooks.com" },
  ],
  platforms: [
    { icon: "💻", title: "Coursera", description: "Online courses from top universities.", link: "https://www.coursera.org" },
    { icon: "📱", title: "LinkedIn Learning", description: "Professional skill courses.", link: "https://www.linkedin.com/learning" },
    { icon: "📚", title: "Udemy", description: "Courses across various disciplines.", link: "https://www.udemy.com" },
    { icon: "📊", title: "edX", description: "Courses from universities and institutions.", link: "https://www.edx.org" },
  ],
  tutorials: [
    { icon: "🎥", title: "Writing Academic Papers", description: "Tutorial on writing research papers.", link: "https://www.youtube.com/watch?v=UY7sVKJPTMA" },
    { icon: "🎥", title: "Touch Typing Basics", description: "Learn touch typing techniques.", link: "https://www.youtube.com/watch?v=1ArVtCQqQRE&t=596s" },
    { icon: "🎥", title: "Writing Professional Emails", description: "Craft professional emails effectively.", link: "https://www.youtube.com/watch?v=AFGWENnoCV0&t=196s" },
    { icon: "🎥", title: "Resetting MacOS", description: "Guide on resetting macOS.", link: "https://www.youtube.com/watch?v=KbLBqP_pwTU" },
    { icon: "🎥", title: "Speak Fluently", description: "Learn how to speak fluently.", link: "https://www.youtube.com/watch?v=KbLBqP_pwTU" },
  ],
  resources: [
    { icon: "🌐", title: "Khan Academy", description: "Educational resources for all subjects.", link: "https://www.khanacademy.org" },
    { icon: "📊", title: "MIT OpenCourseware", description: "Courses from top universities.", link: "https://ocw.mit.edu/" },
    { icon: "📜", title: "World Digital Library", description: "Explore cultural treasures from around the world.", link: "https://www.loc.gov/collections/world-digital-library/about-this-collection/" },
    { icon: "💡", title: "Skillshare", description: "Learn creative skills through curated videos.", link: "https://www.skillshare.com/en/" },
    { icon: "📊", title: "OER Commons", description: "Public digital library of open educational resources.", link: "https://oercommons.org/" },
  ],
};

const AcademicsPage = () => {
  const sectionRefs = {
    libraries: React.useRef(null),
    bookstores: React.useRef(null),
    platforms: React.useRef(null),
    tutorials: React.useRef(null),
    resources: React.useRef(null),
  };

  const renderSection = (sectionName, data) => (
    <Section key={sectionName}>
      <SectionHeader>{sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}</SectionHeader>
      <ScrollButton
        style={{ left: "10px" }}
        onClick={() => scrollContainer("left", sectionRefs[sectionName])}
      >
        ◀
      </ScrollButton>
      <ScrollContainer ref={sectionRefs[sectionName]}>
        {data.map((item, index) => (
          <Card key={index}>
            <CardIcon>{item.icon}</CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <ActionLink href={item.link} target="_blank">
              Learn More
            </ActionLink>
          </Card>
        ))}
      </ScrollContainer>
      <ScrollButton
        style={{ right: "10px" }}
        onClick={() => scrollContainer("right", sectionRefs[sectionName])}
      >
        ▶
      </ScrollButton>
    </Section>
  );

  return (
    <PageContainer>
      <HeroSection>
        <HeroHeading>Welcome to Academics</HeroHeading>
        <HeroSubheading>
          <Typed
            strings={["Explore Libraries", "Find Bookstores", "Enhance Learning", "Master Skills"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </HeroSubheading>
      </HeroSection>
      {Object.entries(sectionsData).map(([sectionName, data]) =>
        renderSection(sectionName, data)
      )}
    </PageContainer>
  );
};

export default AcademicsPage;
