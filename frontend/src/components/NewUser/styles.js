import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.section`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-content: center;
  /*  border: 1px solid #bdc3c7; */
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

  select {
    cursor: pointer;
    margin: 0 0 10px;
    color: #333;
    width: 100%;
    background: #fff;
    height: 44px;
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
    section {
      border: 1px solid grey;
      margin: 0 0 15px;
      padding: 20px;
      border-radius: 4px;
      width: 100%;
    }

    section:nth-child(1) {
      display: flex;
      width: 100%;
      div {
        width: 50%;
        height: 50px;
      }
      div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          max-width: 150px;
          margin: 20px;
        }
      }
      div:nth-child(2) {
        display: flex;
        justify-content: start;
        align-items: center;
        padding-left: 20px;
        border-left: 1px solid #fff;
      }
    }

    section:nth-child(2) {
      border: 1px solid grey;
      display: flex;
      flex-direction: column;

      label {
        cursor: pointer;
      }
      img {
        background-color: #bdc3c7;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      span.title {
        text-align: center;
        background-color: #7159c1;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        color: #fff;
        font-weight: bold;
      }

      input {
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
