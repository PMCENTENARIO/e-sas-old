import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  /* max-width: 900px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 64px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
    .faMenu {
      color: #34495e;
      border-right: 1px solid #eee;
      padding: 10px;
      height: 64px;
      width: 64px;

      &:hover {
        color: ${darken(0.1, '#eee')};
        background: ${darken(0.01, '#34495e')};
        height: 70px;
        width: 70px;
        transition: 500ms;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;

      a {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: #999;
        svg {
          background: red;
        }
      }
    }
  }

  img {
    height: 40px;
    border-radius: 50%;
  }
`;
