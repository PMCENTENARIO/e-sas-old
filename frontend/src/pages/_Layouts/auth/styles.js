import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

/* ANIMATION */
const fade = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
  `;

const downfade = keyframes`
  from {
    opacity:1;
  }
  to {
    opacity:0;
  }
`;

const down = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(100vh)
  }
`;
const nono = keyframes`
  0% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(-15%);
  }
  70%{
    transform: translateX(15%);
  }
  100%{
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #e74c3c, #2ecc71);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 415px;
  text-align: center;
  z-index: 999;

  .validate-error {
    animation: ${nono} 200ms linear, ${fade} paused;
    animation-iteration-count: 2;
  }
  .main-hide {
    animation: ${down} 500ms forwards;
  }

  main {
    animation: ${fade} 1s;

    h1 {
      color: #fff;
    }
    p {
      color: #fff;
      font-weight: bold;
      font-size: 16px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  button {
    height: 44px;
    background: #27ae60;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#27ae60')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
