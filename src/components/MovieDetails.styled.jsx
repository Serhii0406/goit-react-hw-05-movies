import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  padding: 30px;
`;

export const GoBackLink = styled(NavLink)`
  display: flex;
  justify-content: | space-between;
  background-color: #b9b9b9;
  border: 1px solid black;
  padding: 7px;
  text-decoration: none;
  color: black;
  border-radius: 4px;
  margin-bottom: 15px;
  width: 80px;
  :hover,
  :focus {
    background-color: #290b78;
    color: white;
  }
`;

export const Img = styled.img`
  display: block;
  width: 250px;
  margin-right: 20px;
`;

export const FilmCard = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const Title = styled.h1`
  font-size: 27px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const TitleItem = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const LinkAbout = styled(NavLink)`
  text-decoration: none;
`;

export const List = styled.ul`
  padding-bottom: 15px;
  border-bottom: 1px solid black;
`;