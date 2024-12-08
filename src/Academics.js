import React from "react";
import styled from "styled-components";
import { ReactTyped as Typed } from "react-typed";
import aca from "./images/aca.webp";

// Styled Components
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
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubheading = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const Divider = styled.div`
  width: 100%;
  height: 50px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f9f9f9' fill-opacity='1' d='M0,256L60,234.7C120,213,240,171,360,160C480,149,600,171,720,176C840,181,960,171,1080,165.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
`;

const Section = styled.section`
  padding: 3rem 2rem;
  background-color: ${(props) => props.background || "#fff"};
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  color: #0056b3;
  text-align: center;
  margin-bottom: 2rem;
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
  padding: 2rem;
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
  font-size: 3rem;
  color: #0073e6;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ActionLink = styled.a`
  margin-top: 10px;
  color: #007bff;
  font-size: 1rem;
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

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const scrollContainer = (direction, containerRef) => {
  if (containerRef.current) {
    const scrollAmount = direction === "left" ? -300 : 300;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

// Real Data for Each Section
const libraryData = [
    {
      icon: "📚",
      title: "Boston Public Library",
      description: "A historic library offering extensive resources for study.",
      link: "https://www.bpl.org",
    },
    {
      icon: "📖",
      title: "Harvard Library",
      description: "World-renowned library with rich collections.",
      link: "https://library.harvard.edu",
    },
    {
      icon: "📚",
      title: "MIT Libraries",
      description: "Supporting MIT's innovation with extensive resources.",
      link: "https://libraries.mit.edu",
    },
    {
      icon: "📚",
      title: "Tufts Library",
      description: "A comprehensive library system for Tufts University.",
      link: "https://tischlibrary.tufts.edu",
    },
    {
      icon: "📚",
      title: "Snell Library",
      description: "The flagship library at Northeastern University.",
      link: "https://library.northeastern.edu",
    },
  ];
  
  const bookstoreData = [
    {
      icon: "📘",
      title: "Brookline Booksmith",
      description: "Beloved bookstore with a wide selection.",
      link: "https://www.brooklinebooksmith.com",
    },
    {
      icon: "📗",
      title: "Harvard Book Store",
      description: "Academic and rare book collections.",
      link: "https://www.harvard.com",
    },
    {
      icon: "📕",
      title: "Trident Booksellers",
      description: "Books, food, and a community hub.",
      link: "https://www.tridentbookscafe.com",
    },
    {
      icon: "📘",
      title: "Porter Square Books",
      description: "Independent bookstore offering a curated selection.",
      link: "https://www.portersquarebooks.com",
    },
  ];
  
  const educationalPlatformData = [
    {
      icon: "💻",
      title: "Coursera",
      description: "Online courses from top universities worldwide.",
      link: "https://www.coursera.org",
    },
    {
      icon: "📱",
      title: "LinkedIn Learning",
      description: "Industry-focused professional skills courses.",
      link: "https://www.linkedin.com/learning",
    },
    {
      icon: "📚",
      title: "Udemy",
      description: "Courses across a variety of disciplines.",
      link: "https://www.udemy.com",
    },
    {
      icon: "📊",
      title: "edX",
      description: "Courses from top universities and institutions.",
      link: "https://www.edx.org",
    },
  ];
  
  const tutorialData = [
    {
      icon: "🎥",
      title: "Writing Academic Paper",
      description: "A beginner-friendly tutorial on writing an academic paper.",
      link: "https://www.youtube.com/watch?v=UY7sVKJPTMA",
    },
    {
      icon: "🎥",
      title: "Touch Typing Basics",
      description: "Learn touch typing techniques for faster typing.",
      link: "https://www.youtube.com/watch?v=1ArVtCQqQRE&t=596s",
    },
    {
      icon: "🎥",
      title: "Writing Professional Emails",
      description: "Tips and tricks for crafting professional emails.",
      link: "https://www.youtube.com/watch?v=AFGWENnoCV0&t=196s",
    },
    {
      icon: "🎥",
      title: "Resetting MacOs",
      description: "Learn how to reset MacOs",
      link: "https://www.youtube.com/watch?v=KbLBqP_pwTU",
    },
    {
        icon: "🎥",
        title: "Speak Fluently",
        description: "Learn how to speak Fluently",
        link: "https://www.youtube.com/watch?v=KbLBqP_pwTU",
      },
  ];
  
  const resourceData = [
    {
      icon: "🌐",
      title: "Khan Academy",
      description: "Free educational resources for all subjects.",
      link: "https://www.khanacademy.org",
    },
    {
      icon: "📊",
      title: "MIT OpenCourseware",
      description: "Courses from top universities and institutions.",
      link: "https://ocw.mit.edu/",
    },
    {
      icon: "📜",
      title: "The World Digital Library (WDL)",
      description: "Explore cultural treasures from around the world.",
      link: "https://www.loc.gov/collections/world-digital-library/about-this-collection/",
    },
    {
      icon: "💡",
      title: "Skillshare",
      description: "Learn creative skills through curated online videos.",
      link: "https://www.skillshare.com/en/",
    },
    {
        icon: "📊",
        title: "OER Commons",
        description: "OER Commons is a public digital library of open educational resources",
        link: "https://oercommons.org/",
      },
  ];
  
  

const AcademicsPage = () => {
  const librariesRef = React.useRef(null);
  const bookstoresRef = React.useRef(null);
  const platformsRef = React.useRef(null);
  const tutorialsRef = React.useRef(null);
  const resourcesRef = React.useRef(null);

  const renderCards = (data) =>
    data.map((item, index) => (
      <Card key={index}>
        <CardIcon>{item.icon}</CardIcon>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
        <ActionLink href={item.link} target="_blank">
          Learn More
        </ActionLink>
      </Card>
    ));

  return (
    <PageContainer>
      <HeroSection>
        <HeroHeading>Welcome to Academics</HeroHeading>
        <HeroSubheading>
          <Typed
            strings={[
              "Explore Libraries",
              "Find Bookstores",
              "Enhance Learning",
              "Master Skills",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </HeroSubheading>
      </HeroSection>
      <Divider />

      {/* Libraries Section */}
      <Section>
        <SectionHeader>Libraries</SectionHeader>
        <ScrollButton
          className="left"
          onClick={() => scrollContainer("left", librariesRef)}
        >
          ◀
        </ScrollButton>
        <ScrollContainer ref={librariesRef}>
          {renderCards(libraryData)}
        </ScrollContainer>
        <ScrollButton
          className="right"
          onClick={() => scrollContainer("right", librariesRef)}
        >
          ▶
        </ScrollButton>
      </Section>

      {/* Bookstores Section */}
      <Section>
        <SectionHeader>Bookstores</SectionHeader>
        <ScrollButton
          className="left"
          onClick={() => scrollContainer("left", bookstoresRef)}
        >
          ◀
        </ScrollButton>
        <ScrollContainer ref={bookstoresRef}>
          {renderCards(bookstoreData)}
        </ScrollContainer>
        <ScrollButton
          className="right"
          onClick={() => scrollContainer("right", bookstoresRef)}
        >
          ▶
        </ScrollButton>
      </Section>

      {/* Educational Platforms Section */}
      <Section>
        <SectionHeader>Educational Platforms</SectionHeader>
        <ScrollButton
          className="left"
          onClick={() => scrollContainer("left", platformsRef)}
        >
          ◀
        </ScrollButton>
        <ScrollContainer ref={platformsRef}>
          {renderCards(educationalPlatformData)}
        </ScrollContainer>
        <ScrollButton
          className="right"
          onClick={() => scrollContainer("right", platformsRef)}
        >
          ▶
        </ScrollButton>
      </Section>

      <Section>
        <SectionHeader>Tutorials</SectionHeader>
        <ScrollButton
          className="left"
          onClick={() => scrollContainer("left", tutorialsRef)}
        >
          ◀
        </ScrollButton>
        <ScrollContainer ref={tutorialsRef}>
          {renderCards(tutorialData)}
        </ScrollContainer>
        <ScrollButton
          className="right"
          onClick={() => scrollContainer("right", tutorialsRef)}
        >
          ▶
        </ScrollButton>
      </Section>
      <Section>
        <SectionHeader>Online Resources</SectionHeader>
        <ScrollButton
          className="left"
          onClick={() => scrollContainer("left", resourcesRef)}
        >
          ◀
        </ScrollButton>
        <ScrollContainer ref={resourcesRef}>
          {renderCards(resourceData)}
        </ScrollContainer>
        <ScrollButton
          className="right"
          onClick={() => scrollContainer("right", resourcesRef)}
        >
          ▶
        </ScrollButton>
      </Section>
    </PageContainer>
  );
};

export default AcademicsPage;
