import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function Appiwwyw(){
    const [input, setInput] = useState("yo");
    const navigate = useNavigate();
    return(
        <div className="flex align-center justify-center">
            <div className="flex align-center justify-center flex-col ">
                <input placeholder="write something here" type="text" onChange={(e) =>{setInput(e.target.value)}}/>
                <h1 > 
                    {input.length < 10 ? input : "you are gay"}
                </h1>
            </div>
            <button onClick={()=>{navigate("/react-playground")}}>go home</button>
        </div>
    );
}

export default Appiwwyw;