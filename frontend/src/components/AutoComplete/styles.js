import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  /* border: 1px solid grey; */
  /* box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px 1px rgba(0, 0, 0, 0.18); */
  font-size: 14px;
  color: rgba(0, 0, 0, 0.73);
  background: #fff;

  input {
    min-height: 44px;
    min-width: 40%;
    width: 100%;
    border: none;
    color: rgba(0, 0, 0, 0.73);
    border-radius: 4px;
  }

  ul {
    width: 400px;
    position: absolute;
    text-align: left;
    margin: 0;
    padding: 0;
    border-top: 1px solid grey;
    background-color: rgba(255, 255, 255, 0.73);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px 1px rgba(0, 0, 0, 0.18);

    &::before {
      content: '';
    }

    li {
      padding: 10px 5px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        background-color: rgba(128, 128, 128, 0.2);
      }
    }
  }
`;
