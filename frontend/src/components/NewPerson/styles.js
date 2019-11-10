import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid #bdc3c7;
  padding: 10px 50px;

  h3 {
    text-align: center;
    margin: 0 0 20px;
    background: #7159c1;
    font-size: 18px;
    padding: 10px;
    color: #fff;
    text-transform: uppercase;
  }

  button {
    height: 44px;
    width: 100%;
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

  form {
    /* display: flex;
    flex-direction: column;
    height: 100%; */
    section {
      border: 1px solid grey;
      margin: 0 0 30px;
      padding: 20px;
      border-radius: 4px;
      width: 100%;
    }

    section:nth-child(1) {
      label {
        cursor: pointer;
      }
      img {
        background-color: #bdc3c7;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      input {
        /*       border: 1px solid grey; */
        border-radius: 4px;
        margin: 0 0 10px;
        width: 100%;
        height: 44px;
        text-align: justify;
        padding: 0 5px;

        &:focus {
          border: 1px solid #27ae60;
          font-weight: bold;
        }
      }
    }
  }
`;
