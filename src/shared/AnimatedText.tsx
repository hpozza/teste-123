import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const AnimatedMessage = styled.h1`
  font-size: 24px;
  opacity: 1;
  animation-fill-mode: forwards;
`;

const AnimatedMessages = ({ messages }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < messages.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); // Stop the interval when the array reaches the end
        setDone(true);
      }
    }, 3000); // Adjust the interval duration based on your needs

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex, messages.length]);

  return (
    <>
      <AnimatedMessage style={{fontSize: 48, fontFamily: `${messages[currentIndex] == 'Posso contar com sua ajuda, hoje a noite?' ? 'OctoberCrow' : 'Arial'}` }}>{messages[currentIndex]}</AnimatedMessage>
    </>
  );
};

export default AnimatedMessages;
