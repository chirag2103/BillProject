import styled from 'styled-components';

export const Main = styled('div')`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

export const DropDownContainer = styled('div')`
  margin: 0 auto;
`;

export const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  //   padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.2rem;
  color: #3faffa;
  background: #ffffff;
  user-select: none;
  width: 16rem;
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  width: 15rem;
`;

export const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 0.9em;
  font-weight: 500;
  &:first-child {
    padding-top: 0.1em;
  }
`;

export const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.5em;
  user-select: none;
`;
