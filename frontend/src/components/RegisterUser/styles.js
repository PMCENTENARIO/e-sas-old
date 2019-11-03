import styled from 'styled-components';

export const Content = styled.section`
  border: 1px solid #bdc3c7;
  height: 100%;
  padding: 15px;
  margin: 30px 0 0;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin: 0 0 30px;
    background: #7159c1;
    padding: 10px;
    color: #fff;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;

    .inputField {
      display: flex;
    }

    .fieldset {
      border: 1px solid grey;
      display: flex;
      flex: 1;
      flex-direction: column;
      margin: 0 2px;

      justify-content: space-between;
      padding: 10px;

      .photoLabel {
        padding: 5px 0 5px 5px;
        margin: 10px 0;
        color: #fff;
        background-color: #bdc3c7;

        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;

        display: flex;
        justify-content: space-between;

        label {
          cursor: pointer;
        }
        img {
          margin: -20px -5px;
          background-color: #bdc3c7;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }

      span {
        text-align: center;
        background-color: #7159c1;
        margin-bottom: 15px;
        padding: 10px;
        color: #fff;
        font-weight: bold;
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

  select {
    margin: 0 0 10px;
    color: #333;
    width: 100%;
    background: #fff;
    cursor: pointer;
    height: 44px;
  }

  button {
    margin: 30px 0;
  }
`;
