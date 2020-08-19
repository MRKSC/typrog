import styled from "styled-components";
import { motion } from "framer-motion"

export const Board = styled.div`
padding: 0;
margin: 0;
height: 100vh;
width: 100%;
overflow: hidden;
display:flex;
flex-direction: row;
flex-wrap: wrap;
text-align: center;
justify-content: center;
align-items: center;
background: ${props => props.theme.boardStyle.background};
cursor: default;

`;

export const Cell = styled(motion.div)`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
max-height: ${props => props.theme.cellStyle.height};
min-height: ${props => props.theme.cellStyle.height};
max-width: ${props => props.theme.cellStyle.width};
min-width: ${props => props.theme.cellStyle.width};
margin: ${props => props.theme.cellStyle.padding};
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;


export const H1 = styled.h1`
color: ${props => props.theme.cellStyle.color};
font-size: 25px;
`;
