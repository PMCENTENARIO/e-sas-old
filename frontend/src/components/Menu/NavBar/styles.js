import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  height: 100%;
  min-width: 95px;
  justify-content: space-between;
  ${props =>
    props.open &&
    css`
      min-width: 220px;
    `};

  nav {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    &:nth-child(1) {
      a {
        display: flex;
        align-items: center;
      }

      span {
        display: none;
        margin-left: 10px;
      }
    }

    ${props =>
      props.open &&
      css`
        align-items: flex-start;
        padding-left: 20px;
        &:nth-child(1) {
          span {
            display: block;
          }
        }
      `};

    div:nth-child(1) {
      height: 36px;
      background: transparent;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      margin: 0 0 10px;
      padding: 2px 0 0;

      button {
        cursor: pointer;
        outline: 0;
        background: transparent;
        border: 0;

        svg {
          font-size: 30px;
        }
      }
    }

    svg {
      color: #34495e;
      margin-bottom: 10px;
      &:hover {
        color: ${lighten(0.3, '#34495e')};
        transition: 800ms;
      }
    }
  }

  aside {
    display: flex;
    justify-content: space-around;
    height: 34px;

    svg {
      color: #34495e;
      margin-bottom: 10px;
      &:hover {
        color: ${lighten(0.3, '#34495e')};
        transition: 800ms;
      }
    }
  }
`;

// export const Content = styled.div`
//   display: flex;
//   flex-direction: column;

//   border: 1px solid red;
// `;
