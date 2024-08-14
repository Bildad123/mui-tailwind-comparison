import React from 'react';
import { Container, Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system";

// Keyframes for the text reveal animation
const textReveal = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Duration for animation
const animationDuration = "1s";

const LandingPage = () => {
  return (
    <Container
      sx={{
        padding: 4,
        maxWidth: "lg",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          opacity: 0,
          animation: `${textReveal} ${animationDuration} ease-out forwards`,
        }}
      >
        Welcome to the Ultimate Framework Comparison Tool
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          opacity: 0,
          animation: `${textReveal} ${animationDuration} 0.5s ease-out forwards`,
        }}
      >
        Easily compare and choose between MUI and Tailwind CSS for your next
        project.
      </Typography>

      <Box
        sx={{
          padding: 3,
          textAlign: "center",
          opacity: 0,
          animation: `${textReveal} ${animationDuration} 1s ease-out forwards`,
        }}
      >
        <Typography variant="body1" paragraph>
          Our application provides a comprehensive comparison of MUI and
          Tailwind CSS, two of the most popular styling frameworks. Make
          informed decisions with detailed insights and real-world examples to
          guide your choices.
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
