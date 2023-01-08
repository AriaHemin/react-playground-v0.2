import {  useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

function CrazyBgChange(){
    const navigate = useNavigate();
    const [count, setCount] = useState(0)
    const [color, setColor] = useState()
    useEffect(()=>{
        const colors = ["red", "green" , "blue" , "purple" , "yellow" , "orange"]
        let randomNum = Math.ceil(Math.random() * 6 - 1);
        setColor(colors[randomNum])
    }, [count])
    
    return(
        <div style={{backgroundColor : color, height: "100vh", width: "100vw"}} className="flex items-center justify-center flex-col" >
            <div className="text-3xl bg-white rounded px-5 py-10" >{count}</div>
            <div>
                <button className="py-1 px-3 m-2 rounded bg-white" onClick={()=>{setCount(count - 1); console.log(color) }}> - </button>
                <button className="py-1 px-3 m-2 rounded bg-white" onClick={()=>{setCount(count + 1); console.log(color)}}> + </button>
            </div>
            <button onClick={()=>{navigate("/react-playground")}}>go home</button>
        </div>
    )
}

export default CrazyBgChange;
