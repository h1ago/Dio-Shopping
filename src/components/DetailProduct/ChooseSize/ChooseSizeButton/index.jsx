import React from "react";
import {CircleButton} from "./styles"

export default function ChooseSizeButton(props){
    
    return (
        <CircleButton
                onClick={() => props.handleClick(props.children)} 
                selected={props.selected}
        >
            {props.children}
        </CircleButton>
    )
}