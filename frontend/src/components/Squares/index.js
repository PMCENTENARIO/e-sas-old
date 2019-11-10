import React from 'react';
import styled, { keyframes } from 'styled-components';

const up = keyframes`
from{
  opacity:0;
  transform: translateY(0)
}
50%{
  opacity:1;
}
to{
  opacity:0;
  transform: translateY(-1000px) rotate(960deg);
}
`;

export const Container = styled.ul`
  li {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    bottom: 0;
    z-index: -1;
    animation: ${up} 3s infinite;
    animation-direction: alternate;
  }
`;

export default function Squares() {
  const handleSquares = () => {
    const ulSqueres = document.querySelector('ul.squares');

    /* Backgroud squeres */
    for (let i = 0; i < 30; i++) {
      const li = document.createElement('li');

      const random = (min, max) => Math.random() * (max - min) + min;

      const size = Math.floor(random(10, 120));
      const position = random(1, 99);
      const delay = random(5, 0.1);
      const duration = random(14, 2);

      li.style.width = `${size}px`;
      li.style.height = `${size}px`;
      li.style.bottom = `-${size}px`;
      li.style.left = `${position}%`;
      li.style.animationDelay = `${delay}s`;
      li.style.animationDuration = `${duration}s`;
      li.style.animationTimingFunction = `cubic-bezier(
        ${Math.random()},
        ${Math.random()},
        ${Math.random()},
        ${Math.random()}
        )`;

      ulSqueres.appendChild(li);
    }

    ulSqueres.addEventListener('animationstart', event => {
      if (event.animationName === 'eEcJXn') {
        document.querySelector('body').style.overflow = 'hidden';
      }
    });

    ulSqueres.addEventListener('animationend', event => {
      if (event.animationName === 'eEcJXn') {
        ulSqueres.style.display = 'none';
        document.querySelector('body').style.overflow = 'hidden';
      }
    });
  };

  setTimeout(handleSquares, 1000);

  return <Container className="squares" />;
}
