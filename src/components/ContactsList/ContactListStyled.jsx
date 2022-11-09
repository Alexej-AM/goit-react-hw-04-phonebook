import styled from '@emotion/styled';


export const List = styled.li`
list-style:none;

`

export const DeleteButton = styled.span`
padding-right: 2px;
padding-left: 2px;
min-width: 100px;
height: 20px;
margin-left: 25px;
font-size: 13px;
background-color: black;
color: white;
border: none;
border-radius: 4px;
&:hover,
&:focus {
    background-color: red;
}

`