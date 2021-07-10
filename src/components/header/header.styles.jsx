import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  text-transform: uppercase;
  width: 50%;
`;

export const OptionLink = styled(Link)`
  color: #222;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-decoration: none;

  &:hover {
    color: #007ad2;
  }
`;
