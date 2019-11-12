import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
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

    .AutoComplete-Compont {
      margin: 0 auto 10px 0;
      width: 100%;

      input {
        border: 1px solid #999;
        padding: 0.5rem;
        width: 100%;
      }

      .no-suggestions {
        color: #999;
        padding: 0.5rem;
      }

      .suggestions {
        position: absolute;
        background-color: #fff;
        border: 1px solid #999;
        border-top-width: 0;
        list-style: none;
        margin-top: 0;
        max-height: 143px;
        overflow-y: auto;
        padding-left: 0;
        width: calc(300px + 1rem);
      }

      .suggestions li {
        padding: 0.5rem;
      }

      .suggestion-active,
      .suggestions li:hover {
        background-color: #008f68;
        color: #fae042;
        cursor: pointer;
        font-weight: 700;
      }

      .suggestions li:not(:last-of-type) {
        border-bottom: 1px solid #999;
      }
    }

    /* .AutoComplete-Compont {
      display: flex;
      width: 100%;
      align-items: center;
      margin: 0 0 10px;

      button {
        width: 80px;
        font-size: 12px;
      }

      input {
        min-height: 44px;
        min-width: 40%;
      }
      div:nth-child(1) {
        display: flex;
      }
      div:nth-child(2) {
        border: 1px solid grey;
        border-radius: 4px;
        width: 100%;
        display: flex;
        align-items: center;
        height: auto;
        min-height: 44px;

        span {
          margin-left: 20px;
          font-style: italic;

          &:nth-child(n + 2) {
            padding-left: 20px;
            border-left: 1px solid #fff;
          }
        }
      }
    } */

    textarea {
      margin-bottom: 20px;
    }

    input,
    textarea,
    select {
      border-radius: 4px;
      text-align: justify;
      padding: 0 10px;
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
  }
`;
