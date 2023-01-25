import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled(NavLink)`
  text-decoration: none;
`;

export const Main = styled.main`
  padding: 30px;
`;

export const Form = styled.form`
  margin-bottom: 15px;
`;
export const Input = styled.input`
  border: 2px solid black;
  border-radius: 4px;
  padding: 5px;
  margin-right: 10px;
`;
export const Button = styled.button`
  background-color: #27319d;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  `;