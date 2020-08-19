import React, {useState} from "react";
import {Board, Cell,H1} from './LetterBackground.styled'


export default function TheLetterBackground (){
    let [bordAmount]=useState(['A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','J',,'A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B','A','B','C','E','G','I','O','F','X','B','A','B','C','E','G','I','O','F','X','B','J','G','D','A','F','X','B','A','B','C','E','B','A','B','C','E','G','I','O','F','X','B','J','B',])

    const generateBoard = () => {
        return(
            bordAmount.map((item, index)=> <Cell whileHover={{ scale: 2.5}}  key={index}><H1>{item}</H1></Cell>)
        )
    }

    return(
        <Board>
            {generateBoard()}
        </Board>
    )
}