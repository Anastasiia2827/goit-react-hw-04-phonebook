import styled from "styled-components";

export const ListStyled = styled.ul`
 list-style: none;
 display: flex;
 flex-direction: column;
 gap: 15px;
 padding: 0;
 margin: 0;
`;

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const ButtonDelete = styled.button`
padding: 5px 20px;
border-radius: 4px;
border: none;
cursor: pointer;
background-color: red;
transition: 250ms;
&:hover {
  scale: 1.1;
`;