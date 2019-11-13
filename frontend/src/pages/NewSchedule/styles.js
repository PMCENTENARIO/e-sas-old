import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  @media screen and (min-width: 850px) {
    /* .AutoComplete-Compont {
      flex-direction: row;
      div:nth-child(1) {
        input {
          width: 100%;
        }
        width: 100%;
        input {
        }
      }
      div:nth-child(2) {
        align-items: center;
        padding: 0 20px;
        margin-left: 20px;
      }
    } */
  }

  @media screen and (max-width: 850px) {
    /* .AutoComplete-Compont {
      flex-direction: column;
      div:nth-child(1) {
        input {
          width: 100%;
        }
        width: 100%;
        input {
        }
      }
      div:nth-child(2) {
        width: 100%;
        margin-top: 10px;
        padding: 0 10px;
      }
    } */
  }
  display: flex;
  flex-direction: column;
  height: 100%;

  h3 {
    text-align: center;
    margin: 0 0 20px;
    background: #7159c1;
    font-size: 18px;
    padding: 10px;
    color: #fff;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      margin-bottom: 20px;
    }

    input,
    textarea,
    select {
      border-radius: 4px;
      text-align: justify;
      padding: 0 10px;
      &:disabled {
        background: rgba(189, 195, 199, 1);
      }
      &:read-only {
        background: rgba(189, 195, 199, 1);
      }
    }

    fieldset {
      display: flex;
      flex-direction: column;

      div:nth-child(2) {
        display: flex;
        flex-direction: row;
        input:nth-child(2) {
          width: 20%;
          margin-left: 10px;
        }
      }
      input {
        width: 100%;
        height: 44px;
        margin: 0 0 10px;

        &:focus {
          border: 1px solid #27ae60;
          font-weight: bold;
        }
      }
      select {
        cursor: pointer;
        margin: 0 0 10px;
        color: #333;
        width: 100%;
        background: #fff;
        height: 44px;
      }
    }

    button {
      height: 44px;
      width: 100%;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      border: 0;
    }

    button:enabled {
      background: #27ae60;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#27ae60')};
      }
    }
  }
`;
