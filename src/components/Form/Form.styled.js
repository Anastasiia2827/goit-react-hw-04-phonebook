import styled from 'styled-components';

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
padding: 15px;
background-color: lightgray; 
border-radius: 4px;
`;

export const Label = styled.label`
display: flex;
justify-content: space-between;
gap: 10px;
`;

export const InputStyle = styled.input`
width: 470px;
border-radius: 4px
`;

export const Button = styled.button`
 width: 150px;
 padding: 10px;
 border-radius: 4px;
 border: none;
 color: #fff;
 cursor: pointer;
 background-color: green;
 transition: 300ms;
 margin-left: auto;
 margin-right: auto;
 &:hover {
   scale: 1.05;
   background-color: goldenrod;
 }
`;