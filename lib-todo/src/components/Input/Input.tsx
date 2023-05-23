import React from "react";

export interface InputProps {
    onClick() :()=>void,
    onChange() :()=>void,
    children: string,
    disabled : boolean,
}

const Input = (props: InputProps) => {
    return <div>{props.children}
        <input></input>
        <button disabled={props.disabled}>Enter</button>
    </div>
}

export default Input;

