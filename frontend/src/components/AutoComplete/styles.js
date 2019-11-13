import styled from 'styled-components';

export const Content = styled.div`
  margin: 0 auto 10px 0;
  width: 100%;

  input {
    border: 1px solid #999;
    padding: 0.5rem;
    width: 100%;
    height: 44px;
  }
  ul {
    position: absolute;
    background-color: #fff;
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 143px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(400px + 1rem);

    li {
      padding: 0.5rem;
    }

    li:hover {
      background-color: #008f68;
      color: #fae042;
      cursor: pointer;
      font-weight: 700;
    }

    li:not(:last-of-type) {
      border-bottom: 1px solid #999;
    }

    .suggestion-active {
      background-color: #008f68;
      color: #fae042;
      cursor: pointer;
      font-weight: 700;
    }

    .no-suggestions {
      color: #999;
      padding: 0.5rem;
    }
  }
`;

export const BoxInfo = styled.div`
  margin-top: 10px;
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
`;
