import React, { ReactNode } from "react"

type InputProops ={
    onClick() :void,
    onChange() :void,
    children: ReactNode,
    disabled : boolean,
}

export function Input({children}:InputProops) {
    return <div>{children}
        <input></input>
        <button>Enter</button>
    </div>


}``