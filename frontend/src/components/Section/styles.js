import styled from 'styled-components';

export const Container = styled.section`
  grid-area: m;
  height: 100%;
  background: linear-gradient(90deg, #bdc3c7, #bdc3c7);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const HeaderMain = styled.div`
  width: 100%;
  height: 40px;
  background-color: #ecf0f1;
  margin: 0 0 5px;
`;

export const Main = styled.div`
  background-color: #ecf0f1;
  height: 100%;
  padding: 20px;
  margin: 20px;
  border-radius: 4px;
  overflow-x: hidden;
`;
