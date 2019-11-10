import styled from 'styled-components';

export const Container = styled.main`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 20px 30px;
  width: 100%;
`;
export const ErrorMessage = styled.span`
  color: #e74c3c;
  margin: 0 0 10px;
  font-weight: bold;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 0;
  padding: 0 5px;
  strong {
    color: #2c3e50;
    opacity: 0.5;
    font-size: 14px;
    b {
      background: red;
      padding: 1px;
      border-radius: 4px;
      text-align: center;
      font-size: 12px;
    }
  }
`;
