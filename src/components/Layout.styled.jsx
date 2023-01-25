import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  display: inline-block;
  padding: 10px;
  font-weight: 700;
  color: black;
  border-radius: 5px;
  &.active {
    background-color: #27319d;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #27319d;
  }
`;

export const Header = styled.header`
  padding: 30px;
  box-shadow: 0 0 14px 0 rgba(3, 5, 7, 0.35);
`;