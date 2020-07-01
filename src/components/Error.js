import React from 'react';
import styled from '@emotion/styled';

const ErrorMessage = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({message}) => {
    return ( 
        <ErrorMessage>{message}</ErrorMessage>
     );
}
 
export default Error;